import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmGoalsComponent } from './firm-goals.component';

describe('FirmGoalsComponent', () => {
  let component: FirmGoalsComponent;
  let fixture: ComponentFixture<FirmGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
