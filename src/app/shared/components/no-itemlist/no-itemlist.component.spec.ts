import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoItemlistComponent } from './no-itemlist.component';

describe('NoItemlistComponent', () => {
  let component: NoItemlistComponent;
  let fixture: ComponentFixture<NoItemlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoItemlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoItemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
