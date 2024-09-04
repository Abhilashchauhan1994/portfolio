import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor() {}

  home() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }

  worktimeline() {
    document
      .getElementById('worktimeline')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  skills() {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  }
  projects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
