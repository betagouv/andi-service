import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmFaqComponent } from './firm-faq.component';

describe('FirmFaqComponent', () => {
  let component: FirmFaqComponent;
  let fixture: ComponentFixture<FirmFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
