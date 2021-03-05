import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classtest1Component } from './classtest1.component';

describe('Classtest1Component', () => {
  let component: Classtest1Component;
  let fixture: ComponentFixture<Classtest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Classtest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Classtest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
