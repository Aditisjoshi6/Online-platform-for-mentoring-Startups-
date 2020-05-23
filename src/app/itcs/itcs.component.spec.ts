import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITcsComponent } from './itcs.component';

describe('ITcsComponent', () => {
  let component: ITcsComponent;
  let fixture: ComponentFixture<ITcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
