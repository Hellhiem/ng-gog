import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartIndicatorComponent } from './cart-indicator.component';
import { GameStoreService } from '../../services/game-store/game-store.service';
import { of } from 'rxjs';
import { GameItem } from '../../types/GameItem';
import { games } from '../../mocks/games';

describe('CartIndicatorComponent', () => {
  let component: CartIndicatorComponent;
  let fixture: ComponentFixture<CartIndicatorComponent>;
  let gameStoreServiceSpy: jasmine.SpyObj<GameStoreService>;

  const mockGames: GameItem[] = games;

  beforeEach(async () => {
    gameStoreServiceSpy = jasmine.createSpyObj('GameStoreService', ['getGames']);
    gameStoreServiceSpy.getGames.and.returnValue(of(mockGames));

    await TestBed.configureTestingModule({
      imports: [CartIndicatorComponent],
      providers: [{ provide: GameStoreService, useValue: gameStoreServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CartIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set cartGameItems from GameStoreService on init', () => {
    expect(component.cartGameItems).toEqual(mockGames);
    expect(gameStoreServiceSpy.getGames).toHaveBeenCalled();
  });

  it('should emit cartClick when onClick is called', () => {
    spyOn(component.cartClick, 'emit');
    component.onClick();
    expect(component.cartClick.emit).toHaveBeenCalled();
  });

  it('should accept isCartExpanded input', () => {
    component.isCartExpanded = true;
    fixture.detectChanges();
    expect(component.isCartExpanded).toBeTrue();
  });
});
