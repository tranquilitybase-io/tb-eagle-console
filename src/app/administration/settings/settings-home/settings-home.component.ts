import {
  selectSettings,
  selectCreateSettingsStatus,
  selectUpdateSettingsStatus,
  selectDeleteSettingsStatus
} from './../settings.reducer';
import { getSettings, createSettings, updateSettings } from './../settings.actions';
import { Component, OnInit } from '@angular/core';
import { Settings } from '../settings.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Loadable } from '@app/shared/shared.reducer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { resetApiStatuses } from '../settings.actions';
import { SettingsDialogComponent } from '../setting-dialog/settings-dialog-clear/settings-dialog-clear.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.scss']
})
export class SettingsHomeComponent implements OnInit {
  settingsForm: FormGroup;
  settings: Settings;

  createSettingsStatus$: Observable<Loadable>;
  updateSettingsStatus$: Observable<Loadable>;
  deleteSettingsStatus$: Observable<Loadable>;

  constructor(private store: Store<any>, private formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {
    this.store.dispatch(resetApiStatuses());
    this.store.dispatch(getSettings());
    this.createSettingsStatus$ = this.store.select(selectCreateSettingsStatus);
    this.updateSettingsStatus$ = this.store.select(selectUpdateSettingsStatus);
    this.deleteSettingsStatus$ = this.store.select(selectDeleteSettingsStatus);

    this.settingsForm = this.formBuilder.group({
      token: ['', Validators.required],
      username: ['', Validators.required]
    });

    this.store.select(selectSettings).subscribe(settings => {
      this.settings = settings;
      this.settingsForm.patchValue(settings);
    });

    this.createSettingsStatus$.subscribe(status => {
      this.handleStatus(status);
    });
    this.updateSettingsStatus$.subscribe(status => {
      this.handleStatus(status);
    });
    this.deleteSettingsStatus$.subscribe(status => {
      this.handleStatus(status);
    });
  }

  get f() {
    return this.settingsForm.controls;
  }

  handleStatus(status: Loadable) {
    status.loading ? this.settingsForm.disable() : this.settingsForm.enable();
  }

  onCreate(settings) {
    this.settingsForm.valid ? this.store.dispatch(createSettings({ settings })) : this.settingsForm.markAllAsTouched();
  }

  onUpdate(settings) {
    this.store.dispatch(updateSettings({ settings }));
  }

  onClear() {
    this.dialog.open(SettingsDialogComponent, {
      autoFocus: false
    });
  }

  areSettinsEmpty(): boolean {
    return (
      (this.settings.token === undefined || this.settings.token === '') &&
      (this.settings.username === undefined || this.settings.username === '')
    );
  }
}
