import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import Typewriter from 't-writer.js';
import { WorktimelineComponent } from '../worktimeline/worktimeline.component';
import { SkillComponent } from '../skill/skill.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    WorktimelineComponent,
    CommonModule,
    SkillComponent,
    FooterComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const target = document.querySelector('.tw');
      const writer = new Typewriter(target, {
        loop: true,
        typeColor: '#25d05e',
      });
      writer.strings(400, ' Full stack Developer', ' Devops Learner').start();
    }
  }
}
