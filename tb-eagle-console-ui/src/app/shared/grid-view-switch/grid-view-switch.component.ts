import { Component, Output, Input, EventEmitter } from "@angular/core";
import getCustomProperty from "@app/shared/utils/getCustomProperty";

export type GridViewOption = "grid" | "row";

@Component({
  selector: "app-grid-view-switch",
  templateUrl: "./grid-view-switch.component.html",
  styleUrls: ["./grid-view-switch.component.scss"]
})
export class GridViewSwitchComponent {
  activeColor = getCustomProperty("--white");
  inactiveColor = getCustomProperty("--dark-grey");

  options = [
    {
      name: "grid",
      icon: "3x3grid"
    },
    {
      name: "row",
      icon: "row_view"
    }
  ];

  @Input() current: GridViewOption = "grid";
  @Output() onViewChange = new EventEmitter<GridViewOption>();

  isActive(name: GridViewOption): boolean {
    return this.current === name;
  }

  getColorForOption(name: GridViewOption): string {
    return this.isActive(name) ? this.activeColor : this.inactiveColor;
  }

  onOptionClick(name: GridViewOption) {
    this.current = name;
    this.onViewChange.emit(name);
  }
}
