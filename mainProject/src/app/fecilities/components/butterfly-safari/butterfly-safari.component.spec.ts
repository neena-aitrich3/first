import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterflySafariComponent } from './butterfly-safari.component';

describe('ButterflySafariComponent', () => {
  let component: ButterflySafariComponent;
  let fixture: ComponentFixture<ButterflySafariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButterflySafariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButterflySafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
