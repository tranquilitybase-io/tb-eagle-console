import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-zones-create',
  templateUrl: './landing-zones-create.component.html',
  styleUrls: ['./landing-zones-create.component.scss']
})
export class LandingZonesListComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      csp: [''],
      site: ['']
    });
  }
}
