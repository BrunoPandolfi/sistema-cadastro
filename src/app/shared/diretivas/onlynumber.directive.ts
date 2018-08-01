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
    // console.log(event.code);
    switch (event.key){
      case 'Backspace':
      case 'Delete':
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'Tab':
        return;
    }

    if ((event.ctrlKey && 'A') ||
        (event.ctrlKey && 'C') ||
        (event.ctrlKey && 'V') ||
        (event.ctrlKey && 'X') ||
        (event.altKey && 'Tab'))
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
