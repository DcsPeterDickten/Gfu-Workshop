import { createAction } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import { Book } from './books/book';

export const initialState: number = 0;

export const incrementCreator = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

export const loescheBuch = createAction('[Book] Delete', (isbn: string) => ({
  isbn,
}));

export const counterReducer = createReducer(
  initialState,
  on(incrementCreator, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export const bookReducer = createReducer(
  [] as Book[],
  on(loescheBuch, (state, { isbn }) =>
    state.filter((buch) => buch.isbn !== isbn)
  )
);
