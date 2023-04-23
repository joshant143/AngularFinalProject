import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingServicesComponent } from './using-services.component';

describe('UsingServicesComponent', () => {
  let component: UsingServicesComponent;
  let fixture: ComponentFixture<UsingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
