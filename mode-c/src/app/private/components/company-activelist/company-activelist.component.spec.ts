import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyActivelistComponent } from './company-activelist.component';

describe('CompanyActivelistComponent', () => {
  let component: CompanyActivelistComponent;
  let fixture: ComponentFixture<CompanyActivelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyActivelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyActivelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
