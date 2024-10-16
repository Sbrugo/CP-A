import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss'],
})
export class TextBlockComponent {
  @Input() customClass: string = '';
}
