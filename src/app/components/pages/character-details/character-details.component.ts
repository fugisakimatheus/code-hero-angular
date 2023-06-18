import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterModel } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  public character: CharacterModel = {} as CharacterModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCharacterDetails(parseInt(params['id']));
    });
  }

  get imageUrl() {
    return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
  }

  get series() {
    return this.character.series.items.map((item) => item.name);
  }

  get events() {
    return this.character.events.items.map((item) => item.name);
  }

  get stories() {
    return this.character.stories.items.map((item) => item.name);
  }

  getCharacterDetails(id: number) {
    this.characterService.getCharacterById(id).subscribe({
      next: (response) => {
        this.character = response.data.results[0];
      },
    });
  }
}
