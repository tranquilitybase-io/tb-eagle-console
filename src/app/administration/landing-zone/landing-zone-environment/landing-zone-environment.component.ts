import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Store, select } from '@ngrx/store';
import {
  EnvironmentState,
  selectEnvironmentListData,
  selectFolderStructureTreeData,
  selectLanVPCListData,
  selectLzEnvironmentDeploymentStatus,
  selectStoreEnvironmentListDataStatus,
  selectStoreFolderStructureTreeDataStatus,
  selectStoreLanVPCListDataStatus,
} from './landing-zone-environment.reducer';
import {
  resetEnvironmentStatuses,
  storeEnvironmentListData,
  storeFolderStructureTreeData,
  storeLanVPCListData,
} from './landing-zone-environment.actions';
import { FolderStructureNode, LanVPC, Environment } from './landing-zone-environment.model';
import { LandingZoneDialogDeployEnvComponent } from '../landing-zone-dialog/landing-zone-dialog-deploy-env/landing-zone-dialog-deploy-env.component';
import { LandingZoneDialogDeployEnvEnvironmentErrorComponent } from '../landing-zone-dialog/landing-zone-dialog-deploy-env-environment-error/landing-zone-dialog-deploy-env-environment-error.component';

import { MatDialog } from '@angular/material/dialog';
import { Loadable } from '@app/shared/shared.reducer';
import { Router } from '@angular/router';
import { selectLandingZoneEnvironmentReadOnly } from '../landing-zone.reducer';
import { getLandingZoneProgressItems } from '../landing-zone.actions';

@Component({
  selector: 'app-landing-zone-environment',
  templateUrl: './landing-zone-environment.component.html',
  styleUrls: ['./landing-zone-environment.component.scss'],
})
export class LandingZoneEnvironmentComponent implements OnInit {
  environmentList: Environment[];
  isEnvironmentEdit = false;
  isFolderStructureEdit = false;
  isLanVPCEdit = false;
  lanVPCForm: FormGroup;

  environmentList$: Observable<Environment[]> = this.store.select(selectEnvironmentListData);
  environmentListData: Environment[];

  storeFolderStructureTreeDataStatus$: Observable<Loadable> = this.store.select(
    selectStoreFolderStructureTreeDataStatus
  );
  storeEnvironmentListDataStatus$: Observable<Loadable> = this.store.select(selectStoreEnvironmentListDataStatus);
  storeLanVPCListDataStatus$: Observable<Loadable> = this.store.select(selectStoreLanVPCListDataStatus);

  folderStructureDataSource = new MatTreeNestedDataSource<FolderStructureNode>();
  folderStructureTreeControl = new NestedTreeControl<FolderStructureNode>((node) => node.children);
  folderStructureTreeData: FolderStructureNode[];

  lanVPCListData: LanVPC[];
  lanVPCNameList: string[];

  readOnly$: Observable<boolean> = this.store.select(selectLandingZoneEnvironmentReadOnly);

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  lzEnvironmentDeploymentStatus$: Observable<Loadable> = this.store.pipe(select(selectLzEnvironmentDeploymentStatus));

  //#region Constructor
  constructor(private store: Store<EnvironmentState>, private dialog: MatDialog, private router: Router) {
    this.store.pipe(select(selectFolderStructureTreeData)).subscribe((folderStructureTreeData) => {
      this.folderStructureTreeData = folderStructureTreeData;
      this.setInitialFolderStructureForm();
    });
    this.environmentList$.subscribe((environmentListData) => {
      this.environmentListData = environmentListData;
      this.setInitialEnvironmentForm();
    });
    this.store.pipe(select(selectLanVPCListData)).subscribe((lanVPCListData) => {
      this.lanVPCListData = lanVPCListData;
      this.setInitialLanVPCForm();
    });
  }
  //#endregion Constructor

  //#region ngOnInit
  ngOnInit() {
    this.store.dispatch(getLandingZoneProgressItems());
    this.store.dispatch(resetEnvironmentStatuses());
    this.lzEnvironmentDeploymentStatus$.subscribe((status) => {
      this.handleLzEnvironmentDeploymentStatus(status);
    });
  }
  //#endregion ngOnInit

  //#region Folder Structure
  setInitialFolderStructureForm() {
    const data = JSON.parse(JSON.stringify(this.folderStructureTreeData));
    this.folderStructureDataSource.data = data;
    this.folderStructureTreeControl.dataNodes = data;
    this.folderStructureTreeControl.expandAll();
  }

  saveFolderStructure() {
    const folderStructureTreeData = this.folderStructureDataSource.data;
    this.store.dispatch(storeFolderStructureTreeData({ folderStructureTreeData }));
    this.isFolderStructureEdit = false;
  }

  cancelFolderStructure() {
    this.setInitialFolderStructureForm();
    this.isFolderStructureEdit = false;
  }

  setFolderStructureEdit() {
    this.isFolderStructureEdit = true;
  }

  folderStructureHasChild = (_: number, node: FolderStructureNode) => !!node.children && node.children.length > 0;

  toggleFolderStructureItem(node) {
    node.isActive = !node.isActive;
  }
  //#endregion Folder Structure

  //#region Environment
  setInitialEnvironmentForm() {
    this.environmentList = [...this.environmentListData];
  }

  saveEnvironmentList() {
    const environmentListData = this.environmentList;
    this.store.dispatch(storeEnvironmentListData({ environmentListData }));
    this.isEnvironmentEdit = false;
  }

  addEnvironment(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.environmentList.push({ id: 0, isActive: true, name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeEnvironment(environment: Environment): void {
    const index = this.environmentList.indexOf(environment);

    if (index >= 0) {
      this.environmentList.splice(index, 1);
    }
  }

  cancelEnvironmentEdit() {
    this.setInitialEnvironmentForm();
    this.isEnvironmentEdit = false;
  }

  setEnvironmentEdit() {
    this.isEnvironmentEdit = true;
  }
  //#endregion Environment

  //#region LAN VPC
  setInitialLanVPCForm() {
    let lanVPCGroup = {};

    this.lanVPCListData.forEach((lanVPC) => {
      lanVPCGroup[lanVPC.name] = new FormControl((lanVPC.environments as Environment[]).map((env) => env.id));
    });

    this.lanVPCForm = new FormGroup(lanVPCGroup);
    this.lanVPCNameList = this.lanVPCListData.map((lanVPC) => lanVPC.name);
  }

  addLanVPC(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.lanVPCNameList.push(value.trim());
      this.lanVPCForm.addControl(value.trim(), new FormControl([]));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLanVPC(lanVpcName: string): void {
    const index = this.lanVPCNameList.indexOf(lanVpcName);

    if (index >= 0) {
      this.lanVPCNameList.splice(index, 1);
      this.lanVPCForm.removeControl(lanVpcName);
    }
  }

  onLanVPCSubmit() {
    const lanVPCListData: LanVPC[] = Object.entries(this.lanVPCForm.value).map(([key, value]: [string, number[]]) => ({
      name: key,
      isActive: true,
      environments: value,
    }));
    this.store.dispatch(storeLanVPCListData({ lanVPCListData }));
    this.isLanVPCEdit = false;
  }

  onLanVPCCancel() {
    this.setInitialLanVPCForm();
    this.isLanVPCEdit = false;
  }

  setLanVPCEdit() {
    this.isLanVPCEdit = true;
  }

  isEnvironmentAvailable(envId: number, lanVpcName?: string) {
    let usedLanVpcEnvList: number[] = [];
    this.lanVPCNameList.forEach((_lanVpcName) => {
      if (lanVpcName !== _lanVpcName) {
        usedLanVpcEnvList = [...usedLanVpcEnvList, ...(this.lanVPCForm.value[_lanVpcName] as number[])];
      }
    });
    return !usedLanVpcEnvList.includes(envId);
  }

  isAnyEnvironmentAvailable() {
    let usedEnvCount: number = 0;
    const lanVpcFormValue = this.lanVPCForm.value;
    Object.keys(lanVpcFormValue).forEach((key) => {
      usedEnvCount = usedEnvCount + lanVpcFormValue[key].length;
    });
    return this.environmentList.length > usedEnvCount;
  }
  //#endregion LAN VPC

  //#region Deploy
  deploy() {
    if (this.isAnyEnvironmentAvailable()) {
      this.dialog.open(LandingZoneDialogDeployEnvEnvironmentErrorComponent, { disableClose: true, autoFocus: false });
    } else {
      this.dialog.open(LandingZoneDialogDeployEnvComponent, { disableClose: true, autoFocus: false });
    }
  }
  //#endregion Deploy

  //#region snack-bar status

  private handleLzEnvironmentDeploymentStatus(status: Loadable) {
    status.success && this.router.navigateByUrl('/administration/landing-zone');
  }
  //#endregion snack-bar status
}
