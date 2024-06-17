import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomDialogComponent } from './phantom-dialog.component';

describe('PhantomDialogComponent', () => {
  let component: PhantomDialogComponent;
  let fixture: ComponentFixture<PhantomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhantomDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhantomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
