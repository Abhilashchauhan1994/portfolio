import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/inteface/role';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-worktimeline',
  templateUrl: './worktimeline.component.html',
  styleUrls: ['./worktimeline.component.scss']
})
export class WorktimelineComponent implements OnInit {

  roleData: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/utility/roles/roles.json").subscribe(data =>{
      console.log(data);
      this.roleData = data;
    })
  }
}
