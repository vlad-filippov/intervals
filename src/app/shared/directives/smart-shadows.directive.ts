import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSmartShadows]'
})
export class SmartShadowsDirective {
  private leftShadow: string = 'gray 20px 0px 10px -10px inset';
  private rightShadow: string = 'gray -20px 0px 10px -10px inset';
  private element: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
    this.element.style.boxShadow = this.rightShadow;
  }

  @HostListener('scroll', ['$event']) public autoHideShadows(event: Event): void {
    const htmlElement = event.target as HTMLDivElement;
    const containerWidth = this.element.offsetWidth;

    if (htmlElement.scrollLeft === 0) {
      this.element.style.boxShadow = this.rightShadow;
    } else if (htmlElement.scrollLeft + containerWidth === htmlElement.scrollWidth) {
      this.element.style.boxShadow = this.leftShadow;
    } else {
      this.element.style.boxShadow = this.rightShadow + ',' + this.leftShadow;
    }
  }
}
