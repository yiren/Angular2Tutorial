import { Directive, ElementRef , Renderer, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[fa-highlight]'
})
export class HighlightDirective implements OnInit{
  private backgroundColor:string;

  @HostListener('mouseenter')
  mouseover(){
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave')
  mouseleave(){
    this.backgroundColor=this.defaultColor;
  }

  @HostBinding('style.backgroundColor')
  get setColor(){
    return this.backgroundColor;
  }

  @HostListener('click', ['$event'])
  onClick(event){
    console.log(event);
  }

  @Input()
  defaultColor = 'white';

  @Input('fa-highlight')
  highlightColor = 'greed';

  constructor(private elementRef:ElementRef, private renderer:Renderer) { 
    //this.elementRef.nativeElement.style.backgroundColor='green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color', 'green');
  }

  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  }

}
