import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent], // Use imports for standalone components
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.text = 'Test Button';
    fixture.detectChanges();
  });

  it('should display the correct text', () => {
    const buttonText = fixture.debugElement.query(By.css('.clear-cart-text')).nativeElement.textContent;
    expect(buttonText).toContain('Test Button');
  });

  it('should call onClick when button is clicked', () => {
    spyOn(component, 'onClick');
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.onClick).toHaveBeenCalled();
  });
});
