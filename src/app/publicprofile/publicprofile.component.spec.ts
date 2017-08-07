import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicprofileComponent } from './publicprofile.component';

describe('PublicprofileComponent', () => {
  let component: PublicprofileComponent;
  let fixture: ComponentFixture<PublicprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
