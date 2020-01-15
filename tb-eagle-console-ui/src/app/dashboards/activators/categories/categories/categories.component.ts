import { Component } from "@angular/core";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent {
  categories = [
    "Web applications",
    "Grid compute",
    "Micro-services",
    "Machine learning",
    "Other",
    "3 Tier .NET",
    "Streaming Data",
    "Compute Sandbox"
  ];
}
