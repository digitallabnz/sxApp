import { Component, OnInit } from '@angular/core';
import { MemberStoreService } from 'src/app/services/member-store.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  tiles: any;
  breakpoint: any;
  members: any;
  membersTrackFn = (i, member) => member.id;

  constructor( private memberStoreService: MemberStoreService) {} 

  ngOnInit() {    
    this.changeGridResolution(window.innerWidth);
  }

  onResize(event) {
    this.changeGridResolution(event.target.innerWidth);    
  }

  changeGridResolution(windowSize){
    if(windowSize <= 767){
      this.breakpoint = 1;
    }
    else if(windowSize <= 991){
      this.breakpoint = 2;
    }
    else if(windowSize <= 1199 ){
      this.breakpoint = 3;
    }
    else{
      this.breakpoint = 4;
    }
  }
}
