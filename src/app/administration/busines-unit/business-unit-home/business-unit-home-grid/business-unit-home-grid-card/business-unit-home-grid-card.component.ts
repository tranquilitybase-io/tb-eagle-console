import { Component, OnInit, Input, HostListener } from '@angular/core';
import { User } from '@app/administration/users/users.model';

@Component({
  selector: 'app-business-unit-home-grid-card',
  templateUrl: './business-unit-home-grid-card.component.html',
  styleUrls: ['./business-unit-home-grid-card.component.scss']
})
export class BusinessUnitHomeGridCardComponent implements OnInit {
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

  get name(): string {
    return `${this.user.lastName}, ${this.user.firstName}`;
  }
}
