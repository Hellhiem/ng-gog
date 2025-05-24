import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [TranslatePipe, UpperCasePipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Output() buttonClick = new EventEmitter<void>();
  @Input() text = '';

  onClick() {
    this.buttonClick.emit();
  }
}
