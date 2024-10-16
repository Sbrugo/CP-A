import { Component } from '@angular/core';
import { PageComponent } from './pages/page-component/page-component.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppWrapperComponent } from './shared/app-wrapper/app-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, PageComponent, CommonModule, AppWrapperComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPageTitle: string = 'Dashboard';

  // Esta función actualiza el título según el evento recibido del navbar
  setPage(title: string) {
    this.currentPageTitle = title;
  }
}
