import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoracleRideComponent } from './coracle-ride.component';

describe('CoracleRideComponent', () => {
  let component: CoracleRideComponent;
  let fixture: ComponentFixture<CoracleRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoracleRideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoracleRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
