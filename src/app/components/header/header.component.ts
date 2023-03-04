import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  open: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.open = !this.open;
  }

}
