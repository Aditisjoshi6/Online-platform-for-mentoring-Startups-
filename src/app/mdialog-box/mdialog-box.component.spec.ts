import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdialogBoxComponent } from './mdialog-box.component';

describe('MdialogBoxComponent', () => {
  let component: MdialogBoxComponent;
  let fixture: ComponentFixture<MdialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
