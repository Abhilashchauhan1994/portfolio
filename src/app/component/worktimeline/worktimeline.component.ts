import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-worktimeline',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './worktimeline.component.html',
  styleUrl: './worktimeline.component.scss',
})
export class WorktimelineComponent {
  roleData: any = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get('assets/utility/roles/roles.json')
      .subscribe((data: any) => {
        console.log(data);
        this.roleData = data;
      });
  }
}
