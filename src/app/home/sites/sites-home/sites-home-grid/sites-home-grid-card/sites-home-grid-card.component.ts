import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TableData } from '../../../sites.model';

@Component({
  selector: 'app-sites-home-grid-card',
  templateUrl: './sites-home-grid-card.component.html',
  styleUrls: ['./sites-home-grid-card.component.scss'],
})
export class SitesHomeGridCardComponent implements OnInit {
  @Input() site: TableData;
  active = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }
}
