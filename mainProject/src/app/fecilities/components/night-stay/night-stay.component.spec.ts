import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightStayComponent } from './night-stay.component';

describe('NightStayComponent', () => {
  let component: NightStayComponent;
  let fixture: ComponentFixture<NightStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightStayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
