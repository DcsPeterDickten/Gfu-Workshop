import { BookFilterPipe } from './book-filter.pipe';

describe('BookFilterPipe', () => {
  const BOOK = {
    title: 'Angular 17',
    isbn: '',
    price: 0,
    rating: 1,
    coverUrl: '',
  };

  let pipe: BookFilterPipe = new BookFilterPipe();

  beforeEach(() => {
    pipe = new BookFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('ignores an empty list', () => {
    const result = pipe.transform([], 'test');
    expect(result).toEqual([]);
  });

  it('works with one book', () => {
    const result = pipe.transform([BOOK], 'test');
    expect(result).toEqual([]);
  });

  it('works with one book', () => {
    const result = pipe.transform([BOOK], 'ANGULAR');
    expect(result).toEqual([BOOK]);
  });
});
