import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberSearchService {
  apiUrl : any;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl =  environment.baseUrl;
  }

  public getMembers(policyNo){
    return this.httpClient.get(`${this.apiUrl}/members?policyNumber=${policyNo}`);
  }
}
