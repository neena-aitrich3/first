import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdWatchingComponent } from './bird-watching.component';

describe('BirdWatchingComponent', () => {
  let component: BirdWatchingComponent;
  let fixture: ComponentFixture<BirdWatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdWatchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdWatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
