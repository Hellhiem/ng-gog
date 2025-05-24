import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceLabelComponent } from './price-label.component';
import { TranslateModule } from '@ngx-translate/core';

describe('PriceLabelComponent', () => {
  let component: PriceLabelComponent;
  let fixture: ComponentFixture<PriceLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceLabelComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept price input', () => {
    component.price = 99.99;
    fixture.detectChanges();
    expect(component.price).toBe(99.99);
  });

  it('should accept isOwned input', () => {
    component.isOwned = true;
    fixture.detectChanges();
    expect(component.isOwned).toBeTrue();
  });

  it('should accept inCart input', () => {
    component.inCart = true;
    fixture.detectChanges();
    expect(component.inCart).toBeTrue();
  });

  it('should emit priceClick when onClick is called', () => {
    spyOn(component.priceClick, 'emit');
    component.onClick();
    expect(component.priceClick.emit).toHaveBeenCalled();
  });
});
