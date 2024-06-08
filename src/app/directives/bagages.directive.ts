import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBagages]',
  standalone: true,
})
export class BagagesDirective {
  @Input() classe: string = '';
  @Input() bagages: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.updateBagages();
  }

  private updateBagages(): void {
    let maxBagages = 0;

    switch (this.classe) {
      case 'STANDARD':
        maxBagages = 1;
        break;
      case 'BUSINESS':
        maxBagages = 2;
        break;
      case 'PREMIUM':
        maxBagages = 3;
        break;
      default:
        maxBagages = 0;
        break;
    }

    if (this.bagages > maxBagages) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
    }
  }
}
