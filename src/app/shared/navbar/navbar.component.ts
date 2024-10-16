import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() pageChange = new EventEmitter<string>();

  setPage(title: string) {
    this.pageChange.emit(title);
  }
}
