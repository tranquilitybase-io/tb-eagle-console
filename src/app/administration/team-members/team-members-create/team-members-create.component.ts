import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-members-create',
  templateUrl: './team-members-create.component.html',
  styleUrls: ['./team-members-create.component.scss']
})
export class TeamMembersCreateComponent implements OnInit {
  teamMemberForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.teamMemberForm = this.formBuilder.group({
      id: 0,
      isActive: true,
      teamId: ['', Validators.required],
      userId: ['', Validators.required],
      roleId: ['', Validators.required]
    });
  }
  get f() {
    return this.teamMemberForm.controls;
  }

  onSubmit(teamMemberData) {
    if (this.teamMemberForm.valid) {
      // debugger;
      // this.store.dispatch(storeTeamMemberData({ teamMemberData }));
      // this.router.navigateByUrl('/administration/teams');
    } else {
      this.teamMemberForm.markAllAsTouched();
    }
  }
}
