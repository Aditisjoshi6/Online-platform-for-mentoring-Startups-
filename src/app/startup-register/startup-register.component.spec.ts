import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupRegisterComponent } from './startup-register.component';

describe('StartupRegisterComponent', () => {
  let component: StartupRegisterComponent;
  let fixture: ComponentFixture<StartupRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
