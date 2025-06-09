import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input.component';
import { By } from '@angular/platform-browser';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SearchInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input with placeholder', () => {
    component.placeholder = 'Search here';
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.placeholder).toBe('Search here');
  });

  it('should bind value from FormControl', () => {
    component.control.setValue('test');
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.value).toBe('test');
  });

  it('should update FormControl value on input', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'new value';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.control.value).toBe('new value');
  });
});
