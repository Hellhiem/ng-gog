import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { GameStoreService } from '../../services/game-store/game-store.service';
import { of } from 'rxjs';
import { GameItem } from '../../types/GameItem';
import { games } from '../../mocks/games';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let gameStoreServiceSpy: jasmine.SpyObj<GameStoreService>;

  const mockGames: GameItem[] = games;

  beforeEach(async () => {
    gameStoreServiceSpy = jasmine.createSpyObj('GameStoreService', ['getGames']);
    gameStoreServiceSpy.getGames.and.returnValue(of(mockGames));

    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers: [{ provide: GameStoreService, useValue: gameStoreServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cartGameItems from GameStoreService on init', () => {
    expect(component.cartGameItems).toEqual(mockGames);
    expect(gameStoreServiceSpy.getGames).toHaveBeenCalled();
  });

  it('should calculate totalPrice correctly', () => {
    expect(component.totalPrice).toBe(41.95);
  });

  it('should emit cartClick event when onClick is called', () => {
    spyOn(component.cartClick, 'emit');
    component.onClick();
    expect(component.cartClick.emit).toHaveBeenCalled();
  });

  it('should update cartGameItems and totalPrice when new games are emitted', () => {
    const newGames: GameItem[] = games;
    gameStoreServiceSpy.getGames.and.returnValue(of(newGames));
    component.ngOnInit();
    expect(component.cartGameItems).toEqual(newGames);
    expect(component.totalPrice).toBe(41.95);
  });
});
