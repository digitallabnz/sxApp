import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberSearchService {
  apiUrl : any;  

  constructor(private httpClient: HttpClient) { 
    this.apiUrl =  environment.baseUrl;
  }

  public getMembers(policyNo){
    return this.httpClient.get<Member[]>(`${this.apiUrl}/members?policyNumber=${policyNo}`);
  }
}
