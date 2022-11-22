import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencematrix',
  templateUrl: './experiencematrix.component.html',
  styleUrls: ['./experiencematrix.component.scss'],
})
export class ExperiencematrixComponent implements OnInit {
  project_skill: any = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get('assets/utility/skills/project_skill.json')
      .subscribe((data) => {
        console.log(data);
        this.project_skill = data;
      });
  }
}
