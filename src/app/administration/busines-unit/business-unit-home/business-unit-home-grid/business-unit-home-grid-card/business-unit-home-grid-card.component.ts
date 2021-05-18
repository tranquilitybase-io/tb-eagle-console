import { Component, OnInit, Input, HostListener } from '@angular/core';
import { BusinessUnit } from '../../../business-unit.model';

@Component({
  selector: 'app-business-unit-home-grid-card',
  templateUrl: './business-unit-home-grid-card.component.html',
  styleUrls: ['./business-unit-home-grid-card.component.scss'],
})
export class BusinessUnitHomeGridCardComponent implements OnInit {
  @Input() businessUnit: BusinessUnit;

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
