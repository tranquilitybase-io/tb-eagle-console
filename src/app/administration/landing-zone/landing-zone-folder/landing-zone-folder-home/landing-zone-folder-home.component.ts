import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, of } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FolderStructureNode {
  id: number;
  isEnabled: boolean;
  name: string;
  children?: FolderStructureNode[];
}

@Component({
  selector: 'app-landing-zone-folder-home',
  templateUrl: './landing-zone-folder-home.component.html',
  styleUrls: ['./landing-zone-folder-home.component.scss']
})
export class LandingZoneFolderHomeComponent implements OnInit {
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
      isEnabled: true,
      name: 'Applications',
      children: [
        {
          id: 2,
          isEnabled: true,
          name: 'Business Unit',
          children: [
            {
              id: 3,
              isEnabled: true,
              name: 'Team',
              children: [
                {
                  id: 4,
                  isEnabled: true,
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

  constructor(private formBuilder: FormBuilder) {}

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
  setInialLanVPCForm() {
    this.lanVPCForm = this.formBuilder.group({
      lanVPC_dev: [['Development']],
      lanVPC_prod: [['Production']]
    });
  }

  onLanVPCSubmit(lanVPC) {
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
  //#endregion LAN VPC
}
