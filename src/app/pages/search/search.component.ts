import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tiles: any;
  breakpoint: any;
  searchForm = new FormGroup({
    serviceDateCtr: new FormControl('', Validators.required),
    policyNoCtr: new FormControl('',  Validators.required),
    memberNoCtr: new FormControl('')
  }) ;


  
  constructor() { 

    this.tiles= [{"cols": '1111111', "rows": 'opopdidpsdp', "border": '9080707'},{"cols": '1111111', "rows": 'opopdidpsdp', "border": '9080707'}]

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
  
    else{
      this.breakpoint = 2;
    }
  }

  onSubmit(val)
  {
    if (this.searchForm.valid) {
      // save data
      alert(val)
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
