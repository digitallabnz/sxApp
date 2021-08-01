import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDatepickerModule, MatGridListModule, MatNativeDateModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from '../home/home.component';
import { ResultsComponent } from '../results/results.component';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,ReactiveFormsModule,MatDatepickerModule,HttpClientModule,AppRoutingModule, MatGridListModule, MatCardModule, MatNativeDateModule
      ],
      declarations: [ SearchComponent, HomeComponent, ResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de=fixture.debugElement.query(By.css('form'));
    el=de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call the onsubmit method`, async(()=>{
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }))

  it(`form should be invalid- all fields empty`, async(() => {
    component.searchForm.controls['serviceDateCtr'].setValue('');
    component.searchForm.controls['policyNoCtr'].setValue('');
    component.searchForm.controls['memberNoCtr'].setValue('');
    expect(component.searchForm.valid).toBeFalsy();
  }));

  it(`form should be invalid- only service date empty`, async(() => {
    component.searchForm.controls['serviceDateCtr'].setValue('');
    component.searchForm.controls['policyNoCtr'].setValue('123456');
    component.searchForm.controls['memberNoCtr'].setValue('123456');
    expect(component.searchForm.valid).toBeFalsy();
  }));

  it(`form should be valid - all fields have values`, async(() => {
    component.searchForm.controls['serviceDateCtr'].setValue(new Date(2020, 9, 20));
    component.searchForm.controls['policyNoCtr'].setValue('6178899');
    component.searchForm.controls['memberNoCtr'].setValue('23232');
    expect(component.searchForm.valid).toBeTruthy();
  }));

  it(`form should be valid - all required fields not empty`, async(() => {
    component.searchForm.controls['serviceDateCtr'].setValue(new Date(2020, 9, 20));
    component.searchForm.controls['policyNoCtr'].setValue('6178899');
    component.searchForm.controls['memberNoCtr'].setValue('');
    expect(component.searchForm.valid).toBeTruthy();
  }));

  it(`form should be invalid - policy number non numeric`, async(() => {
    component.searchForm.controls['serviceDateCtr'].setValue(new Date(2020, 9, 20));
    component.searchForm.controls['policyNoCtr'].setValue('X6178899');
    component.searchForm.controls['memberNoCtr'].setValue('');
    expect(component.searchForm.valid).toBeFalsy();
  }));

});
