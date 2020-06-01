import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, of } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FolderStructureNode {
  id: number;
  active: boolean;
  name: string;
  children?: FolderStructureNode[];
}

interface LanVPC {
  id?: number;
  name: string;
  environments: string[];
}

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
  folderStructureTreeData: FolderStructureNode[] = [
    {
      id: 1,
      active: true,
      name: 'Applications',
      children: [
        {
          id: 2,
          active: true,
          name: 'Business Unit',
          children: [
            {
              id: 3,
              active: true,
              name: 'Team',
              children: [
                {
                  id: 4,
                  active: true,
                  name: 'Solutions'
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  folderStructureTreeControl = new NestedTreeControl<FolderStructureNode>(node => node.children);

  storedEnvironmentList = ['Development', 'UAT', 'Staging', 'PoC', 'Production'];
  environmentList$: Observable<String[]>;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() {}

  //#region ngOnInit
  ngOnInit() {
    this.setInialFolderStructureForm();
    this.setInialEnvironmentForm();
    this.setInialLanVPCForm();
  }
  //#endregion ngOnInit

  //#region Folder Structure
  setInialFolderStructureForm() {
    const data = JSON.parse(JSON.stringify(this.folderStructureTreeData));
    this.folderStructureDataSource.data = data;
    this.folderStructureTreeControl.dataNodes = data;
    this.folderStructureTreeControl.expandAll();
  }

  saveFolderStructure() {
    console.log(this.folderStructureDataSource.data);
    debugger;
    //TODO dispatch store API
    this.isFolderStructureEdit = false;
  }

  cancelFolderStructure() {
    this.setInialFolderStructureForm();
    this.isFolderStructureEdit = false;
  }

  setFolderStructureEdit() {
    this.isFolderStructureEdit = true;
  }

  folderStructureHasChild = (_: number, node: FolderStructureNode) => !!node.children && node.children.length > 0;

  toggleFolderStructureItem(node) {
    node.isEnabled = !node.isEnabled;
  }
  //#endregion Folder Structure

  //#region Environment
  setInialEnvironmentForm() {
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
    this.setInialEnvironmentForm();
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

  setInialLanVPCForm() {
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
    this.setInialLanVPCForm();
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
