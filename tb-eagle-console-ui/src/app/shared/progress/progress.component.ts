import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() steps: string[];
  @Input() current: number;

  get underlineWidth(): string {
    return Math.round(100*((this.current + 1) / this.steps.length)) + '%';
  }
}
