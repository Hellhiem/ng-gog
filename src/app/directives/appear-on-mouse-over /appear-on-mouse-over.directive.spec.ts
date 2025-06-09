import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppearOnMouseOverDirective } from './appear-on-mouse-over.directive';

@Component({
  template: `<div appAppearOnMouseOver>Test Element</div>`,
})
class TestComponent {}

describe('AppearOnMouseOverDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let div: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, AppearOnMouseOverDirective],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    div = fixture.nativeElement.querySelector('div');
  });

  it('should create an instance', () => {
    expect(div).toBeTruthy();
  });
});
