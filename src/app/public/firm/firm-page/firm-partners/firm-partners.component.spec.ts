import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmPartnersComponent } from './firm-partners.component';

describe('FirmPartnersComponent', () => {
  let component: FirmPartnersComponent;
  let fixture: ComponentFixture<FirmPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
