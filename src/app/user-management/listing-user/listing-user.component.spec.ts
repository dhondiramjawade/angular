import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingUserComponent } from './listing-user.component';

describe('ListingUserComponent', () => {
  let component: ListingUserComponent;
  let fixture: ComponentFixture<ListingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
