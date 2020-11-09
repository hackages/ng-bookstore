import { Component } from '@angular/core';
import { Book } from '../types/book';
import { books as mockBooks } from '../mocks/books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bookstore by Hackages';

  // Use mock data
  books: Book[] = mockBooks;

  search(searchTerm: string): void {
    searchTerm = searchTerm.toLowerCase();
    // Implement the search function
    this.books = mockBooks.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.category.toLowerCase().includes(searchTerm)
    );
  }
}
