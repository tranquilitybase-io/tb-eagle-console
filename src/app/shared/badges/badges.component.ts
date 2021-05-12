import { Component, Input } from '@angular/core';
import getCustomProperty from '../utils/getCustomProperty';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
})
export class BadgesComponent {
  displayBadges: string[] = [];

  @Input() variant: 'default' | 'grey' | 'red' | 'dark-grey' | 'black' = 'grey';
  @Input() set badges(badges: string[]) {
    if (badges.length > 2) {
      this.displayBadges = [badges[0], `+${badges.length - 1}`];
    } else {
      this.displayBadges = badges;
    }
  }
}
