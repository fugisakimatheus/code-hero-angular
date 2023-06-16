import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterModel } from 'src/app/models/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() public character: CharacterModel = {} as CharacterModel;
  @Output() onClickCharacter: EventEmitter<number> = new EventEmitter<number>();

  get imageUrl(): string {
    return `${this.character.thumbnail.path}.${this.character.thumbnail.extension}`;
  }

  get series() {
    return this.character.series.items;
  }

  get stories() {
    return this.character.stories.items;
  }

  onClick() {
    this.onClickCharacter.emit(this.character.id);
  }
}
