import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, CartComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  isCartExpanded = false;

  toggleCart() {
    this.isCartExpanded = !this.isCartExpanded;
  }
}
