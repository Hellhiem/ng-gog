import { Component, ElementRef, HostListener, inject } from '@angular/core';
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
  elementRef = inject(ElementRef);

  toggleCart() {
    this.isCartExpanded = !this.isCartExpanded;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isCartExpanded && !this.elementRef.nativeElement.contains(event.target)) {
      this.toggleCart();
    }
  }
}
