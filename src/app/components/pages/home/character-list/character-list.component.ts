import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterModel } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnChanges {
  @Input() public searchTerm: string = '';
  private readonly limit: number = 8;
  public characterList: CharacterModel[] = [];
  public offset: number = 0;
  public total: number = 0;
  public page: number = 1;

  constructor(
    private router: Router,
    private characterService: CharacterService
  ) {}

  get totalPages(): number {
    return Math.ceil(this.total / this.limit);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      this.getCharacters();
    }
  }

  getCharacters() {
    this.characterService
      .searchCharacters(this.searchTerm, this.limit, this.offset)
      .subscribe({
        next: (response) => {
          this.characterList = response.data.results;
          this.total = response.data.total;
          this.offset = response.data.offset;
        },
      });
  }

  onChangePage(page: number) {
    this.page = page;
    this.offset = (page - 1) * this.limit;
    this.getCharacters();
  }

  onCharacterDetails(id: number) {
    this.router.navigate(['character-details', id]);
  }
}
