import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Member } from '../models/member.model';
import { MemberSearchService } from './member-search.service';

@Injectable({
  providedIn: 'root'
})
export class MemberStoreService {

  constructor(private memberService: MemberSearchService) {
       //Initial load all members
       this.fetchAll()
   }

  readonly _members = new BehaviorSubject<Member[]>([]);
  readonly members$ = this._members.asObservable();
 
  private set members(val: Member[]) {
    this._members.next(val);
  }

  private get members(): Member[] {
    return this._members.getValue();
  }
  async updateQuery(title: string) {
    try {
      this.members = await this.memberService.getMembers(title)
        .toPromise();
    } catch (e) {
      // is server sends back an error, we revert the changes
      console.error(e);
    }
  }  

  async fetchAll(){
    this.members = await this.memberService.getMembers('').toPromise();
  }
}
