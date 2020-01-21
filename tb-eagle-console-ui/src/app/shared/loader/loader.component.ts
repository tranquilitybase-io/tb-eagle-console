import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  private _percentage: number;

  @ViewChild('loader', { static: true }) el: ElementRef;
  @Input() name: string;
  @Input() set percentage(percentage: number) {
    if (percentage && !isNaN(percentage)) {
      this.setPercentage(percentage);
    }

    this._percentage = percentage;
  }

  get percentage(): number {
    return this._percentage;
  }

  private setPercentage(percentage) {
    const loader = this.el.nativeElement;
    const radians = (percentage / 100) * 2 * Math.PI;
    const x = 50 + 100 * Math.sin(radians);
    const y = 50 - 100 * Math.cos(radians);

    if (percentage > 75) {
      loader.classList.remove('second-half');
      loader.classList.add('last-quarter');
    } else if (percentage > 50) {
      loader.classList.add('second-half');
      loader.classList.remove('last-quarter');
    } else {
      loader.classList.remove('last-quarter');
      loader.classList.remove('second-half');
    }

    loader.style.setProperty('--x', x + '%');
    loader.style.setProperty('--y', y + '%');
  }
}
