import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillData:any=[];


  constructor(private httpClient: HttpClient) {
   }

  ngOnInit(): void {
    this.httpClient.get("assets/utility/skills/skill1.json").subscribe(data =>{
      console.log(data);
      this.skillData = data;
    })
  }

  getStyle(progressValue : string){
    const progress = progressValue;
    const progressColor = '#3b929c'
    const remainingProgressColor = '#adb5bd';
    console.log({'background':'linear-gradient(to right, '+progressColor+' '+progress+', '+remainingProgressColor+' '+progress+''});
    return {'background':'linear-gradient(to right, '+progressColor+' '+progress+', '+remainingProgressColor+' '+progress+''}
  }
}
