import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.scss'],
})
export class PillsComponent {
  @Input() pills: string[];
}
