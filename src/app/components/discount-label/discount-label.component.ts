import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discount-label',
  imports: [],
  templateUrl: './discount-label.component.html',
  styleUrl: './discount-label.component.scss',
})
export class DiscountLabelComponent {
  @Input() discount = 0;
}
