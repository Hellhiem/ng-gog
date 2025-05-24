import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-price-label',
  imports: [CurrencyPipe, TranslatePipe, UpperCasePipe],
  templateUrl: './price-label.component.html',
  styleUrl: './price-label.component.scss',
})
export class PriceLabelComponent {
  @Input() price = 0;
  @Input() isOwned = false;
  @Input() inCart = false;
  @Output() priceClick = new EventEmitter<void>();

  onClick() {
    this.priceClick.emit();
  }
}
