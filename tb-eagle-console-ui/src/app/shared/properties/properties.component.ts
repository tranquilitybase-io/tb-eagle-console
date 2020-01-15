import { Component, Input } from "@angular/core";

export interface Property {
  name: string;
  value: any | any[];
  class?: string;
}

@Component({
  selector: "app-properties",
  templateUrl: "./properties.component.html",
  styleUrls: ["./properties.component.scss"]
})
export class PropertiesComponent {
  @Input() title: string;
  @Input() properties: Property[];
  @Input() vertical = false;

  getPropertyClass(property: Property): string {
    return property.class ? property.class : "grey";
  }

  isValueArray(property: Property): boolean {
    return Array.isArray(property.value);
  }
}
