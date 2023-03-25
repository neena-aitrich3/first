import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleRideComponent } from './cycle-ride.component';

describe('CycleRideComponent', () => {
  let component: CycleRideComponent;
  let fixture: ComponentFixture<CycleRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CycleRideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycleRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
