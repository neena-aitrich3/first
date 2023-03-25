import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluenceChartComponent } from './influence-chart.component';

describe('InfluenceChartComponent', () => {
  let component: InfluenceChartComponent;
  let fixture: ComponentFixture<InfluenceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluenceChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluenceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
