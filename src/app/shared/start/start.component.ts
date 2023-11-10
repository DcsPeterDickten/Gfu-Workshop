import { Component } from '@angular/core';

import { Subject, filter, map, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'book-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent {
  constructor() {}

  mySubscriptions: any[] = [];

  destroy$ = new Subject();

  ngOnInit(): void {
    const obs2$ = timer(0, 1000);
    const ob2b$ = obs2$.pipe(
      filter((val) => val % 2 === 0),
      map((val) => val * 100)
    );
    const obs3$ = ob2b$.pipe(takeUntil(this.destroy$));
    obs3$.subscribe((val) => console.log('obs3', val));
  }

  ngOnDestroy(): void {
    this.destroy$.next('bumm');
  }
}
