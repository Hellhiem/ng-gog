import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
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
