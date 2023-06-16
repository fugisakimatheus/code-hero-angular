import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Input() maxPagesToShow: number = 5;
  @Output() onPageChange: EventEmitter<number> = new EventEmitter<number>();

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.onPageChange.emit(page);
    }
  }

  getPageRange(): number[] {
    if (this.totalPages <= this.maxPagesToShow) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    } else {
      const startPage = Math.max(1, this.currentPage - 2);
      const endPage = Math.min(this.totalPages, this.currentPage + 2);
      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => i + startPage
      );
    }
  }
}
