import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastC0deComponent } from './fast-c0de.component';

describe('FastC0deComponent', () => {
  let component: FastC0deComponent;
  let fixture: ComponentFixture<FastC0deComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastC0deComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastC0deComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
