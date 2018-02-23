import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMessageHide]'
})
export class MessageHideDirective {

  constructor( private el: ElementRef) {

  }

  @HostListener('mouseover') onmouseover() {
    const nativeElement = this.el.nativeElement;
    nativeElement.style.color = 'red';
  }
  deleteMessage() {
console.log('message delete has been clicked');
  }
  @HostListener('mouseleave') onmouseleave() {
    const nativeElement = this.el.nativeElement;
    nativeElement.style.color = 'black';
  }

  @HostListener('click') onMessageHideClick() {
    const nativeElement = this.el.nativeElement;
    nativeElement.parentElement.style.display = 'none';
  }
}
