import { Component, inject, Input, OnInit } from '@angular/core';
import { GameItem } from '../../types/GameItem';
import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { DiscountLabelComponent } from '../discount-label/discount-label.component';
import { PriceLabelComponent } from '../price-label/price-label.component';
import { GameStoreService } from '../../services/game-store/game-store.service';

@Component({
  selector: 'app-game-item',
  imports: [NgOptimizedImage, DiscountLabelComponent, PriceLabelComponent, UpperCasePipe],
  templateUrl: './game-item.component.html',
  styleUrl: './game-item.component.scss',
})
export class GameItemComponent implements OnInit {
  @Input() gameItem!: GameItem;
  gameStore = inject(GameStoreService);
  isGameInCart = false;

  ngOnInit() {
    this.gameStore.getGames().subscribe(games => {
      this.isGameInCart = games.some(game => game.id === this.gameItem.id);
    });
  }

  addGame() {
    this.gameStore.addGame(this.gameItem);
  }
}
