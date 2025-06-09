import { Directive, ElementRef, HostListener, Input, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appAppearOnMouseOver]',
})
export class AppearOnMouseOverDirective implements OnInit {
  @Input({ required: true }) appAppearOnMouseOver!: string;
  private element = inject(ElementRef);
  private targetElement?: HTMLElement;

  ngOnInit() {
    this.targetElement = this.element.nativeElement.querySelector(`.${this.appAppearOnMouseOver}`);
    if (!this.targetElement) {
      throw new Error(`No child element found with class "${this.appAppearOnMouseOver}".`);
    }
  }

  @HostListener('mouseover') onMouseEnter() {
    this.setDisplay('block');
  }

  @HostListener('mouseout') onMouseLeave() {
    this.setDisplay('none');
  }

  private setDisplay(display: CSSStyleDeclaration['display']) {
    if (this.targetElement) {
      this.targetElement.style.display = display;
    }
  }
}
