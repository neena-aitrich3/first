import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPendingComponent } from './company-pending.component';

describe('CompanyPendingComponent', () => {
  let component: CompanyPendingComponent;
  let fixture: ComponentFixture<CompanyPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
