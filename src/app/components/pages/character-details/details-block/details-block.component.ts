import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-block',
  templateUrl: './details-block.component.html',
  styleUrls: ['./details-block.component.scss'],
})
export class DetailsBlockComponent {
  @Input() public title: string = '';
  @Input() public items: string[] = [];
}
