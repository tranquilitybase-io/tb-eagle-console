import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites-create',
  templateUrl: './sites-create.component.html',
  styleUrls: ['./sites-create.component.scss'],
})
export class SitesCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      csp: [''],
      site: [''],
    });
  }
}
