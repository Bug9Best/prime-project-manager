import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomFormComponent } from './phantom-form.component';

describe('PhantomFormComponent', () => {
  let component: PhantomFormComponent;
  let fixture: ComponentFixture<PhantomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhantomFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhantomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
