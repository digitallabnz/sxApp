import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MemberSearchService } from './member-search.service';

describe('MemberSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],

  }));

  it('should be created', () => {
    const service: MemberSearchService = TestBed.get(MemberSearchService);
    expect(service).toBeTruthy();
  });



});
