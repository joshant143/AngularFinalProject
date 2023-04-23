import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingSubjectsComponent } from './using-subjects.component';

describe('UsingSubjectsComponent', () => {
  let component: UsingSubjectsComponent;
  let fixture: ComponentFixture<UsingSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
