import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import range from "@app/shared/utils/range";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnChanges {
  pages: number[] = [];

  @Input() totalSize: number = 0;
  @Input() current: number;
  @Input() pageSize: number = 10;
  @Output() onPageChange = new EventEmitter<number>();

  get pagesCount(): number {
    return this.pageSize > 0 ? Math.ceil(this.totalSize / this.pageSize) : 0;
  }

  ngOnChanges() {
    this.pages = range(1, this.pagesCount);
  }

  change(page: number) {
    this.current = page;
    this.onPageChange.emit(page);
  }
}
