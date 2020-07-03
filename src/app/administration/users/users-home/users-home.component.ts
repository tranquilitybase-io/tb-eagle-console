import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '@app/login/login.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss']
})
export class UsersHomeComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private usersService: UsersService, private route: ActivatedRoute) {
    this.users$ = usersService.filteredEntities$;
  }

  ngOnInit() {
    this.usersService.getAll();
  }
}
