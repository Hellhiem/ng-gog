import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameItemComponent } from './game-item.component';
import { GameStoreService } from '../../services/game-store/game-store.service';
import { of } from 'rxjs';
import { GameItem } from '../../types/GameItem';
import { DiscountLabelComponent } from '../discount-label/discount-label.component';
import { PriceLabelComponent } from '../price-label/price-label.component';
import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { games } from '../../mocks/games';

describe('GameItemComponent', () => {
  let component: GameItemComponent;
  let fixture: ComponentFixture<GameItemComponent>;
  let mockGameStore: jasmine.SpyObj<GameStoreService>;
  const mockGame: GameItem = games[0];

  beforeEach(async () => {
    mockGameStore = jasmine.createSpyObj('GameStoreService', ['getGames', 'addGame']);
    await TestBed.configureTestingModule({
      imports: [GameItemComponent, DiscountLabelComponent, PriceLabelComponent, NgOptimizedImage, UpperCasePipe],
      providers: [{ provide: GameStoreService, useValue: mockGameStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(GameItemComponent);
    component = fixture.componentInstance;
    component.gameItem = mockGame;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isGameInCart to true if game is in cart', () => {
    mockGameStore.getGames.and.returnValue(of([{ id: 1 } as GameItem]));
    component.ngOnInit();
    expect(component.isGameInCart).toBeTrue();
  });

  it('should set isGameInCart to false if game is not in cart', () => {
    mockGameStore.getGames.and.returnValue(of([{ id: 2 } as GameItem]));
    component.ngOnInit();
    expect(component.isGameInCart).toBeFalse();
  });

  it('should call addGame on gameStore when addGame is called', () => {
    mockGameStore.addGame.and.stub();
    component.addGame();
    expect(mockGameStore.addGame).toHaveBeenCalledWith(mockGame);
  });
});
