import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Site } from '../../../sites.model';

@Component({
  selector: 'app-sites-home-grid-card',
  templateUrl: './sites-home-grid-card.component.html',
  styleUrls: ['./sites-home-grid-card.component.scss'],
})
export class SitesHomeGridCardComponent implements OnInit {
  @Input() site: Site;
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
