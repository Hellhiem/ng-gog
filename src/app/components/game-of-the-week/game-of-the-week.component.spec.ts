import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameOfTheWeekComponent } from './game-of-the-week.component';
import { TranslateModule } from '@ngx-translate/core';

describe('GameOfTheWeekComponent', () => {
  let component: GameOfTheWeekComponent;
  let fixture: ComponentFixture<GameOfTheWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOfTheWeekComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(GameOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.innerHTML).toBeTruthy();
  });
});
