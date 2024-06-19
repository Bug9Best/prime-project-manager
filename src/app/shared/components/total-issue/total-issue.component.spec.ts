import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalIssueComponent } from './total-issue.component';

describe('TotalIssueComponent', () => {
  let component: TotalIssueComponent;
  let fixture: ComponentFixture<TotalIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalIssueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
