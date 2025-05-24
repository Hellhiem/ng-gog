import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscountLabelComponent } from './discount-label.component';
import { By } from '@angular/platform-browser';

describe('DiscountLabelComponent', () => {
  let component: DiscountLabelComponent;
  let fixture: ComponentFixture<DiscountLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountLabelComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept discount input', () => {
    component.discount = 25;
    fixture.detectChanges();
    expect(component.discount).toBe(25);
  });

  it('should render discount label when discount is set', () => {
    component.discount = 30;
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('.discount-label'));
    expect(label).toBeTruthy();
    expect(label.nativeElement.textContent).toContain('30');
  });
});
