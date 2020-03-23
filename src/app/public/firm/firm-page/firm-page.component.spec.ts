import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmPageComponent } from './firm-page.component';

describe('FirmPageComponent', () => {
  let component: FirmPageComponent;
  let fixture: ComponentFixture<FirmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
