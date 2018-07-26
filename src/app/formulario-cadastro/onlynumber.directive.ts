import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[onlynumber]'
})
export class OnlynumberDirective {
  constructor(private el: ElementRef) {}

  @Input() onlynumber: boolean;

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const valor = event.key;
    const regex = /\d/;
    //console.log(event.code);
    if (event.key === 'Backspace' || event.key === 'Delete')
    {
      return;
    }
    if (regex.test(valor)) {
      return;
    }
    else
    {
      event.preventDefault();
    }
  }
}
