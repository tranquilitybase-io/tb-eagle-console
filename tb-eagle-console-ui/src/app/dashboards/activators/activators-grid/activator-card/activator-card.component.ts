import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Activator } from '../../activators.model';
import { Observable } from 'rxjs';
import { User } from '@app/login/login.model';
import { Store, select } from '@ngrx/store';
import { selectUserIsAdmin } from '@app/login/login.reducer';

@Component({
  selector: 'app-activator-card',
  templateUrl: './activator-card.component.html',
  styleUrls: ['./activator-card.component.scss']
})
export class ActivatorCardComponent implements OnInit {
  @Input() activator: Activator;
  active = false;
  userIsAdmin$: Observable<User>;

  private statusColorMap: Map<string, string>;

  constructor(private store: Store<User>) {}

  ngOnInit() {
    this.statusColorMap = new Map([
      ['available', 'green'],
      ['locked', 'black'],
      ['deprecated', 'yellow']
    ]);
    this.userIsAdmin$ = this.store.pipe(select(selectUserIsAdmin));
  }

  sensitivityColor(): string {
    return String(this.activator.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }

  statusColor(): string {
    return this.statusColorMap.get(String(this.activator.available).toLowerCase());
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }
}
