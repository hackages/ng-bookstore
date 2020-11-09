import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BookInputComponent } from './components/book-input/book-input.component';
import { BooksComponent } from './components/books/books.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BookInputComponent, BooksComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
