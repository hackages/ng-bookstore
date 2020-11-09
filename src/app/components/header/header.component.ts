import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  title = 'Bookstore by You';

  constructor() {}

  ngOnInit(): void {}
}
