import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleComponentOnchangeComponent } from './lifecycle-component-onchange.component';

describe('LifecycleComponentOnchangeComponent', () => {
  let component: LifecycleComponentOnchangeComponent;
  let fixture: ComponentFixture<LifecycleComponentOnchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleComponentOnchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleComponentOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
