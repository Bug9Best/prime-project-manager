import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkBreakDownControlComponent } from './work-break-down-control.component';

describe('WorkBreakDownControlComponent', () => {
  let component: WorkBreakDownControlComponent;
  let fixture: ComponentFixture<WorkBreakDownControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkBreakDownControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkBreakDownControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
