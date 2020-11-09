import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bs-book-input',
  templateUrl: './book-input.component.html',
  styleUrls: ['./book-input.component.css'],
})
export class BookInputComponent implements OnInit {
  @Output()
  searchTermEmitter: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  search(el: HTMLInputElement): void {
    this.searchTermEmitter.emit(el.value);
  }
}
