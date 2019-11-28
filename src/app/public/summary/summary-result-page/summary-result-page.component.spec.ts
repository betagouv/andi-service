import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryResultPageComponent } from './summary-result-page.component';

describe('SummaryResultPageComponent', () => {
  let component: SummaryResultPageComponent;
  let fixture: ComponentFixture<SummaryResultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryResultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
