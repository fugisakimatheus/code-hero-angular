import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public searchTerm: string = '';
  public searchTermChanged = new Subject<string>();

  ngOnInit(): void {
    this.searchTermChanged
      .pipe(debounceTime(800), distinctUntilChanged())
      .subscribe((searchTerm) => {
        this.searchTerm = searchTerm;
      });
  }

  searchCharacters(searchTerm: string) {
    this.searchTermChanged.next(searchTerm);
  }
}
