import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit{


  @Input()
    public url!:string ;


  ngOnInit():void{
    if (this.url) throw new Error('LazyImageComponent requires url');
    this.isLoad = false;
  }

  public isLoad:boolean = false;

  isLoaded():void{
    this.isLoad = true;
  }
}
