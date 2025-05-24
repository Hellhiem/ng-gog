import { Component, inject, Input } from '@angular/core';
import { GameItem } from '../../types/GameItem';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { GameStoreService } from '../../services/game-store/game-store.service';

@Component({
  selector: 'app-cart-item',
  imports: [NgOptimizedImage, CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() cartItem!: GameItem;
  gameStore = inject(GameStoreService);

  removeItem() {
    this.gameStore.removeGame(this.cartItem.id);
  }
}
