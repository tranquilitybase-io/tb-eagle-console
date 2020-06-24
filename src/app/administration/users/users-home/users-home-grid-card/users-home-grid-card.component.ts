import { Component, OnInit, Input, HostListener } from '@angular/core';
import { User } from '../../users.model';

@Component({
  selector: 'app-users-home-grid-card',
  templateUrl: './users-home-grid-card.component.html',
  styleUrls: ['./users-home-grid-card.component.scss']
})
export class UsersHomeGridCardComponent implements OnInit {
  @Input() user: User;

  active = false;

  constructor() {}

  ngOnInit() {}

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }
}
