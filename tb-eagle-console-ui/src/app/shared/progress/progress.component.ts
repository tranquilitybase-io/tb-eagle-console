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
    let percentage = Math.round(100*((this.current + 1) / this.steps.length));

    if (percentage < 100) {
      percentage -= 1;
    }

    return percentage + '%';
  }
}
