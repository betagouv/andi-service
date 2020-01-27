import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPrivateComponent } from './job-private.component';

describe('JobPrivateComponent', () => {
  let component: JobPrivateComponent;
  let fixture: ComponentFixture<JobPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
