import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItemComponent } from './cart-item.component';
import { GameStoreService } from '../../services/game-store/game-store.service';
import { GameItem } from '../../types/GameItem';
import { games } from '../../mocks/games';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let gameStoreServiceSpy: jasmine.SpyObj<GameStoreService>;

  const mockGameItem: GameItem = games[0];

  beforeEach(async () => {
    gameStoreServiceSpy = jasmine.createSpyObj('GameStoreService', ['removeGame']);

    await TestBed.configureTestingModule({
      imports: [CartItemComponent],
      providers: [{ provide: GameStoreService, useValue: gameStoreServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.cartItem = mockGameItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call removeGame with cartItem id when removeItem is called', () => {
    component.removeItem();
    expect(gameStoreServiceSpy.removeGame).toHaveBeenCalledWith(mockGameItem.id);
  });
});
