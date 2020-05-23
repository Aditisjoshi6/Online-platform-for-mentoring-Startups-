import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MguidelinesBoxComponent } from './mguidelines-box.component';

describe('MguidelinesBoxComponent', () => {
  let component: MguidelinesBoxComponent;
  let fixture: ComponentFixture<MguidelinesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MguidelinesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MguidelinesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
