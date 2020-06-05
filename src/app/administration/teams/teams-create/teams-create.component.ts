import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@app/login/login.model';

@Component({
  selector: 'app-teams-create',
  templateUrl: './teams-create.component.html',
  styleUrls: ['./teams-create.component.scss']
})
export class TeamsCreateComponent implements OnInit {
  teamForm: FormGroup;
  teamMembersForm: FormGroup;
  users: User[];

  businessUnitList: KeyValue<string, string>[];

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.businessUnitList = this.route.snapshot.data['businessUnitList'];
    //TODO this.users = this.route.snapshot.data['users'];

    this.teamForm = this.formBuilder.group({
      id: 0,
      name: ['', Validators.required],
      description: ['', Validators.required],
      businessUnitId: ['', Validators.required]
    });

    this.teamMembersForm = this.formBuilder.group({
      //TODO
    });
  }

  onSubmit(team) {
    debugger;
    //TODO this.store.dispatch(createTeam({ team }));
    this.router.navigateByUrl('/administration/teams');
  }
}
