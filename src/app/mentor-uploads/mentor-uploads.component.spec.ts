import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorUploadsComponent } from './mentor-uploads.component';

describe('MentorUploadsComponent', () => {
  let component: MentorUploadsComponent;
  let fixture: ComponentFixture<MentorUploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorUploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
