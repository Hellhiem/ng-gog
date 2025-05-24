import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should have isCartExpanded as false by default', () => {
    expect(component.isCartExpanded).toBeFalse();
  });

  it('should toggle isCartExpanded when toggleCart is called', () => {
    component.toggleCart();
    expect(component.isCartExpanded).toBeTrue();
    component.toggleCart();
    expect(component.isCartExpanded).toBeFalse();
  });
});
