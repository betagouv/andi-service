import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationStepComponent } from './navigation-step.component';

describe('NavigationStepComponent', () => {
  let component: NavigationStepComponent;
  let fixture: ComponentFixture<NavigationStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
