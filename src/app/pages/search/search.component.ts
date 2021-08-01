import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberStoreService } from 'src/app/services/member-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tiles: any;
  breakpoint: any;
  numberRegex = /^(0|[1-9][0-9]*)$/

  searchForm = new FormGroup({
    serviceDateCtr: new FormControl('', [Validators.required]),
    policyNoCtr: new FormControl('',  [Validators.required,  Validators.pattern(this.numberRegex)]),
    memberNoCtr: new FormControl('')
  }) ;
  
  constructor( private memberStoreService: MemberStoreService, private router: Router) { }

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
    else{
      this.breakpoint = 2;
    }
  }

  onSubmit(val)
  {
    if (this.searchForm.valid) {
      // save data
      this.memberStoreService.updateQuery(val.policyNoCtr);
      this.router.navigate(['/results']);
    } else {
        this.validateAllFields(this.searchForm); 
    }    
  }

  validateAllFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
          const control = formGroup.get(field);            
          if (control instanceof FormControl) {             
              control.markAsTouched({ onlySelf: true });
          } else if (control instanceof FormGroup) {        
              this.validateAllFields(control);  
          }
      });
    }

    
}
