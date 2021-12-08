import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  home(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"})
  }

  worktimeline(){
    document.getElementById("worktimeline")?.scrollIntoView({behavior:"smooth"})
  }

  skills(){
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"})
  }

}
