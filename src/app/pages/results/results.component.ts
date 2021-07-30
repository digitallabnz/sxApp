import { Component, OnInit } from '@angular/core';
import { MemberSearchService } from 'src/app/services/member-search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  tiles: any;
  breakpoint: any;
  members: any;
  constructor( private memberSearchService: MemberSearchService) { 

    this.tiles= [{"cols": '1111111', "rows": 'opopdidpsdp', "border": '9080707'},{"cols": '1111111', "rows": 'opopdidpsdp', "border": '9080707'}]
    this.getMemberList()
  }
  
  

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

  getMemberList(){
    this.memberSearchService.getMembers('').subscribe((data)=>{
       this.members = data;
    });
  }

}
