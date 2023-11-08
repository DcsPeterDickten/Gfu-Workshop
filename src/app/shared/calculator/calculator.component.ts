import { Component } from '@angular/core';

@Component({
  selector: 'book-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  x: string = '';
  y: string = '';
  result: number = 0;

  add() {
    this.result = parseInt(this.x) || 0 + parseInt(this.y) || 0;
  }
  subst() {
    this.result = parseInt(this.x) || 0 - parseInt(this.y) || 0;
  }
  
  clear() {
    this.x = '';
    this.y = '';
    this.result = 0;
  }
}
