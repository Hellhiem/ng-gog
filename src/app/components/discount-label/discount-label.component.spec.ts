import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountLabelComponent } from './discount-label.component';

describe('DiscountLabelComponent', () => {
  let component: DiscountLabelComponent;
  let fixture: ComponentFixture<DiscountLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
