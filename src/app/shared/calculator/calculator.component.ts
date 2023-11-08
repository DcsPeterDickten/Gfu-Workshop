import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'book-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit, OnChanges, OnDestroy {
  x: string = '';
  y: string = '';
  result: number = 0;

  constructor() {
    console.log('CalculatorComponent.constructor()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CalculatorComponent.ngOnChanges()');
  }

  ngOnInit(): void {
    console.log('CalculatorComponent.ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('CalculatorComponent.ngOnDestroy()');
    alert('Autsch!');
  }

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
