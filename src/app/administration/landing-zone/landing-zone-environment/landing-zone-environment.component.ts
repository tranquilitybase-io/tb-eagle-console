import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, of } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Store, select } from '@ngrx/store';
import { selectFolderStructureTreeData, EnvironmentState } from './landing-zone-environment.reducer';
import { storeFolderStructureTreeData } from './landing-zone-environment.actions';
import { FolderStructureNode, LanVPC } from './landing-zone-environment.model';

@Component({
  selector: 'app-landing-zone-environment',
  templateUrl: './landing-zone-environment.component.html',
  styleUrls: ['./landing-zone-environment.component.scss']
})
export class LandingZoneEnvironmentComponent implements OnInit {
  lanVPCForm: FormGroup;
  environmentList: String[];
  isFolderStructureEdit = false;
  isEnvironmentEdit = false;
  isLanVPCEdit = false;
  isEnvironmentListSaved = false;

  folderStructureDataSource = new MatTreeNestedDataSource<FolderStructureNode>();
  folderStructureTreeData: FolderStructureNode[];
  folderStructureTreeControl = new NestedTreeControl<FolderStructureNode>(node => node.children);

  storedEnvironmentList = ['Development', 'UAT', 'Staging', 'PoC', 'Production'];
  environmentList$: Observable<String[]>;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private store: Store<EnvironmentState>) {
    this.store.pipe(select(selectFolderStructureTreeData)).subscribe(folderStructureTreeData => {
      this.folderStructureTreeData = folderStructureTreeData;
    });
  }

  //#region ngOnInit
  ngOnInit() {
    this.setIntialFolderStructureForm();
    this.setIntialEnvironmentForm();
    this.setIntialLanVPCForm();
  }
  //#endregion ngOnInit

  //#region Folder Structure
  setIntialFolderStructureForm() {
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
    this.setIntialFolderStructureForm();
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
  setIntialEnvironmentForm() {
    if (!this.isEnvironmentListSaved) this.environmentList = [...this.storedEnvironmentList];

    this.environmentList$ = of(this.environmentList);
  }

  saveEnvironmentList() {
    debugger;
    //TODO dispatch store API
    this.isEnvironmentListSaved = true;
    this.isEnvironmentEdit = false;
  }

  addEnvironment(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.environmentList.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeEnvironment(environment: String): void {
    const index = this.environmentList.indexOf(environment);

    if (index >= 0) {
      this.environmentList.splice(index, 1);
    }
  }

  cancelEnvironmentEdit() {
    this.setIntialEnvironmentForm();
    this.isEnvironmentEdit = false;
  }

  setEnvironmentEdit() {
    this.isEnvironmentEdit = true;
  }
  //#endregion Environment

  //#region LAN VPC
  lanVPCList: LanVPC[] = [
    {
      name: 'Development',
      environments: ['Development']
    },
    {
      name: 'Production',
      environments: ['Production']
    }
  ];

  lanVPCNameList: string[];

  setIntialLanVPCForm() {
    let lanVPCGroup = {};

    this.lanVPCList.forEach(lanVPC => {
      lanVPCGroup[lanVPC.name] = new FormControl(lanVPC.environments);
    });

    this.lanVPCForm = new FormGroup(lanVPCGroup);
    this.lanVPCNameList = this.lanVPCList.map(lanVPC => lanVPC.name);
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
    debugger;
    //TODO dispatch store API
    this.isLanVPCEdit = false;
  }

  onLanVPCCancel() {
    this.setIntialLanVPCForm();
    this.isLanVPCEdit = false;
  }

  setLanVPCEdit() {
    this.isLanVPCEdit = true;
  }

  isEnvironmentAvailable(envName: string, lanVpcName?: string) {
    let usedLanVpcEnvList: string[] = [];
    this.lanVPCNameList.forEach(_lanVpcName => {
      if (lanVpcName !== _lanVpcName) {
        usedLanVpcEnvList = [...usedLanVpcEnvList, ...(this.lanVPCForm.value[_lanVpcName] as string[])];
      }
    });
    return !usedLanVpcEnvList.includes(envName);
  }
  //#endregion LAN VPC
}
