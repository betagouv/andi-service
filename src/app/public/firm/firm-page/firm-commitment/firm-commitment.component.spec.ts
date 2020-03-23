import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmCommitmentComponent } from './firm-commitment.component';

describe('FirmCommitmentComponent', () => {
  let component: FirmCommitmentComponent;
  let fixture: ComponentFixture<FirmCommitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmCommitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmCommitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
