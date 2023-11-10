import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { decrement, incrementCreator, reset } from 'src/app/state';

@Component({
  selector: 'book-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  count$: Observable<number> = of(0);

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  plusEins() {
    this.store.dispatch(incrementCreator());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
