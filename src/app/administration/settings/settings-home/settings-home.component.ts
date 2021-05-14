import { Component, OnInit } from '@angular/core';
import { Settings } from '../settings.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Loadable } from '@app/shared/shared.reducer';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SettingsDialogComponent } from '../setting-dialog/settings-dialog-clear/settings-dialog-clear.component';
import { MatDialog } from '@angular/material/dialog';
import { createSettings, getSettings, resetApiStatuses, updateSettings } from '../settings.actions';
import {
  selectCreateSettingsStatus,
  selectDeleteSettingsStatus,
  selectSettings,
  selectUpdateSettingsStatus,
} from '../settings.reducer';

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.scss'],
})
export class SettingsHomeComponent implements OnInit {
  settingsForm: FormGroup;
  settings: Settings;

  createSettingsStatus$: Observable<Loadable>;
  updateSettingsStatus$: Observable<Loadable>;
  deleteSettingsStatus$: Observable<Loadable>;

  isGitHubCredentialsEdit = false;

  constructor(private store: Store<any>, private formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {
    this.store.dispatch(resetApiStatuses());
    this.store.dispatch(getSettings());
    this.createSettingsStatus$ = this.store.select(selectCreateSettingsStatus);
    this.updateSettingsStatus$ = this.store.select(selectUpdateSettingsStatus);
    this.deleteSettingsStatus$ = this.store.select(selectDeleteSettingsStatus);

    this.settingsForm = this.formBuilder.group({
      token: [''],
      username: [''],
    });

    this.store.select(selectSettings).subscribe((settings) => {
      this.settings = settings;
      this.settingsForm.patchValue(settings);
    });

    this.createSettingsStatus$.subscribe((status) => {
      this.handleStatus(status);
    });
    this.updateSettingsStatus$.subscribe((status) => {
      this.handleStatus(status);
    });
    this.deleteSettingsStatus$.subscribe((status) => {
      this.handleStatus(status);
    });
  }

  get f() {
    return this.settingsForm.controls;
  }

  handleStatus(status: Loadable) {
    status.loading ? this.settingsForm.disable() : this.settingsForm.enable();
  }

  handleSave(settings) {
    this.settingsForm.valid
      ? this.store.dispatch(this.areSettinsEmpty ? createSettings({ settings }) : updateSettings({ settings }))
      : this.settingsForm.markAllAsTouched();

    this.isGitHubCredentialsEdit = false;
  }

  handleClear() {
    this.dialog
      .open(SettingsDialogComponent, {
        autoFocus: false,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result === 'Yes') this.isGitHubCredentialsEdit = false;
      });
  }

  handleCancel() {
    this.settingsForm.patchValue(this.settings);
    this.isGitHubCredentialsEdit = false;
  }

  get areSettinsEmpty(): boolean {
    return (
      (this.settings.token === undefined || this.settings.token === '') &&
      (this.settings.username === undefined || this.settings.username === '')
    );
  }

  setGitHubCredentialsEdit() {
    this.isGitHubCredentialsEdit = true;
  }
}
