import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
