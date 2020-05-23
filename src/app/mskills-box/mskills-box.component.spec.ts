import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MskillsBoxComponent } from './mskills-box.component';

describe('MskillsBoxComponent', () => {
  let component: MskillsBoxComponent;
  let fixture: ComponentFixture<MskillsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MskillsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MskillsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
