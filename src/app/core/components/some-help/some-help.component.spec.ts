import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeHelpComponent } from './some-help.component';

describe('SomeHelpComponent', () => {
  let component: SomeHelpComponent;
  let fixture: ComponentFixture<SomeHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
