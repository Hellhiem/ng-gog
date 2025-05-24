import { Component, inject, OnInit } from '@angular/core';
import { GameItem } from '../../types/GameItem';
import { GameStoreService } from '../../services/game-store/game-store.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CurrencyPipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { SeparatorComponent } from '../separator/separator.component';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [TranslatePipe, NgOptimizedImage, UpperCasePipe, CurrencyPipe, ButtonComponent, SeparatorComponent, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartGameItems: GameItem[] = [];
  totalPrice = 0;
  gameStore = inject(GameStoreService);

  ngOnInit() {
    this.gameStore.getGames().subscribe(games => {
      this.cartGameItems = games;
      this.totalPrice = games.reduce((sum, game) => sum + game.price, 0);
    });
  }
}
