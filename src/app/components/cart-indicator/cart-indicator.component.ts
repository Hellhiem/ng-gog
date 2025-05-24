import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { GameStoreService } from '../../services/game-store/game-store.service';
import { GameItem } from '../../types/GameItem';

@Component({
  selector: 'app-cart-indicator',
  imports: [NgOptimizedImage],
  templateUrl: './cart-indicator.component.html',
  styleUrl: './cart-indicator.component.scss',
})
export class CartIndicatorComponent implements OnInit {
  cartGameItems: GameItem[] = [];
  gameStore = inject(GameStoreService);

  @Input() isCartExpanded = false;
  @Output() cartClick = new EventEmitter<void>();

  ngOnInit() {
    this.gameStore.getGames().subscribe(games => {
      this.cartGameItems = games;
    });
  }

  onClick() {
    this.cartClick.emit();
  }
}
