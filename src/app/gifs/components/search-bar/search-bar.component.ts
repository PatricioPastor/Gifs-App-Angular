import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-bar',
  template:`<h5>Buscar</h5>
  <input
  class="form-control"
  type="text"
  placeholder="Buscar Gifs"
  (keyup.enter)="searchGifs()"
  #TxtInput
  >`
})

export class SearchBarComponent {

@ViewChild('TxtInput')
public TxtInput!: ElementRef<HTMLInputElement>

constructor( private GifsService:GifsService ) {}

searchGifs(): void {
const valueInput = this.TxtInput.nativeElement.value;

this.GifsService.searchTag(valueInput)
this.TxtInput.nativeElement.value = ""

}

}
