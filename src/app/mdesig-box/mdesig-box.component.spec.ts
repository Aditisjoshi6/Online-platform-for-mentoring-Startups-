import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdesigBoxComponent } from './mdesig-box.component';

describe('MdesigBoxComponent', () => {
  let component: MdesigBoxComponent;
  let fixture: ComponentFixture<MdesigBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdesigBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdesigBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
