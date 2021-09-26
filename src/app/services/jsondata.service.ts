import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  baseroleApiUrl ='assets/utility/roles/';
  baseskillApiUrl='assets/utility/skills/';

  constructor(private http: HttpClient) { }

  getRoleData(){
    return this.http.get(this.baseroleApiUrl+'roles.json');
  }

  getSkillData(){
    return this.http.get(this.baseskillApiUrl+'skill1.json');
  }
}
