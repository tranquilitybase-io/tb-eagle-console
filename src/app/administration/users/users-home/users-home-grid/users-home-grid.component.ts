import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Layout } from '@app/layout/layout.model';
import { LayoutService } from '@app/layout/layout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '@app/login/login.model';

@Component({
  selector: 'app-users-home-grid',
  templateUrl: './users-home-grid.component.html',
  styleUrls: ['./users-home-grid.component.scss']
})
export class UsersHomeGridComponent {
  @Input() users$: Observable<User[]>;
  @Input() isLoading: boolean;
  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService, private router: Router, private route: ActivatedRoute) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  createNewUser() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
