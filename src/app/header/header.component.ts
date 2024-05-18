import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor() {}

  toggleMenu() {
    let menuToggle: HTMLInputElement = document.getElementById(
      'menu-toggle',
    ) as HTMLInputElement;
    if (menuToggle) {
      menuToggle.checked = false;
    }
  }
}
