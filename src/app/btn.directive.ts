import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective {


  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {

    this.renderer.addClass(this.el.nativeElement, 'btn')

   }

}
