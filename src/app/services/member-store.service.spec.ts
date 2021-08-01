import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberSearchService } from './member-search.service';

import { MemberStoreService } from './member-store.service';

describe('MemberStoreService', () => {
  let store : MemberStoreService;
  let service: MemberSearchService;
  let fixture: ComponentFixture<MemberStoreService>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    store = new MemberStoreService(service);  
  });

  it('should be created', () => {
    const service: MemberStoreService = TestBed.get(MemberStoreService);
    expect(service).toBeTruthy();
  });
});
