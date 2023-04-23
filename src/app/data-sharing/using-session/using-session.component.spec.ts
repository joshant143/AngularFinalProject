import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingSessionComponent } from './using-session.component';

describe('UsingSessionComponent', () => {
  let component: UsingSessionComponent;
  let fixture: ComponentFixture<UsingSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
