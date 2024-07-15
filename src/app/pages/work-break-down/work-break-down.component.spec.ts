import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkBreakDownComponent } from './work-break-down.component';

describe('WorkBreakDownComponent', () => {
  let component: WorkBreakDownComponent;
  let fixture: ComponentFixture<WorkBreakDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkBreakDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkBreakDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
