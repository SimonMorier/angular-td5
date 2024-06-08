import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVolClasse]',
  standalone: true,
})
export class VolClasseDirective {
  @Input() appVolClasse: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.updateClasse();
  }

  private updateClasse(): void {
    const value = this.appVolClasse.toUpperCase();
    let color = '';

    switch (value) {
      case 'BUSINESS':
        color = 'red';
        break;
      case 'STANDARD':
        color = 'blue';
        break;
      case 'PREMIUM':
        color = 'green';
        break;
      default:
        color = 'black';
        break;
    }

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setProperty(this.el.nativeElement, 'textContent', value);
  }
}
