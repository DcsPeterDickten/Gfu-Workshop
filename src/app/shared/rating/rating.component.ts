import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  @Input()
  stars: number = 1;

  @Input()
  id: string = '';

  @Output()
  notifyPlus: EventEmitter<string> = new EventEmitter<string>();

  plus() {
    this.notifyPlus.emit(this.id);
  }
}
