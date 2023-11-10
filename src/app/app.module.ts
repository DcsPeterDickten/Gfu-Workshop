import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { counterReducer } from './state';

const APP_ROUTES = [
  {
    path: 'a',
    loadChildren: () =>
      import('./modulea/modulea.module').then((m) => m.ModuleaModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BooksModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: false, enableTracing: false }),
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
