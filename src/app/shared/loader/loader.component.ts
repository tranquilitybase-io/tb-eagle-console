import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  private _percentage: number;

  @ViewChild('loader', { static: true }) loaderRef: ElementRef;
  @Input() name: string;
  @Input() set percentage(percentage: number) {
    if (percentage && !isNaN(percentage)) {
      this.setPercentage(percentage);
    }

    this._percentage = percentage;
  }

  constructor(private hostRef: ElementRef) {}

  get percentage(): number {
    return this._percentage;
  }

  private setPercentage(percentage) {
    const loader = this.loaderRef.nativeElement;
    const radians = (percentage / 100) * 2 * Math.PI;
    const x = 50 * Math.sin(radians);
    const y = 50 * Math.cos(radians);

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

    this.hostRef.nativeElement.style.setProperty('--x', x + '%');
    this.hostRef.nativeElement.style.setProperty('--y', y + '%');
    this.hostRef.nativeElement.style.setProperty('--arrow-angle', radians + 'rad');
  }
}
