import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Activator } from '../../activators.model';

@Component({
  selector: 'app-activator-card',
  templateUrl: './activator-card.component.html',
  styleUrls: ['./activator-card.component.scss']
})
export class ActivatorCardComponent implements OnInit {
  @Input() activator: Activator;
  active = false;

  constructor() {}

  ngOnInit() {}

  sensitivityColor(): string {
    return String(this.activator.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
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
