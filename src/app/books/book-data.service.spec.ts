import { TestBed } from '@angular/core/testing';

import { BookDataService } from './book-data.service';

describe('BookDataService', () => {
  // let service: BookDataService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(BookDataService);
  });

  // it('should be created', () => {
  //   // expect(service).toBeTruthy();
  // });

  it('should do math', () => {
    const antwort = 40 + 2;
    expect(antwort).toEqual(42);
  });

  xit('should do math2', () => {
    const antwort = 40 + 2;
    expect(antwort).toEqual(43);
  });
});
