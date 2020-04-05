import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendDashComponent } from './friend-dash.component';

describe('FriendDashComponent', () => {
  let component: FriendDashComponent;
  let fixture: ComponentFixture<FriendDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
