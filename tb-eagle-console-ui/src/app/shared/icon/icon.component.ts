import { Component, Input } from '@angular/core';

export type IconSize = 'sm' | 'm' | 'lg' | 'xl' | number;

const sizeMapping: {[K in IconSize]: number} = {
  sm: 15,
  m: 20,
  lg: 30,
  xl: 40
}

const exceptions = ['slack', 'tb_rocket'];

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() icon: string;
  @Input() color = 'black';
  @Input() size: IconSize = 'm';
  @Input() stroke = false;

  get href(): string {
    if (this.isException) {
      return `assets/icons/${ this.icon }.svg`;
    }

    return 'assets/icons.svg#'+ this.icon;
  }

  get isException(): boolean {
    return exceptions.includes(this.icon);
  }

  get dim(): number {
    return typeof this.size === 'string' ? sizeMapping[this.size] : this.size;
  }
}
