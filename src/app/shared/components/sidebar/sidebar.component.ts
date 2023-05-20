import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';



@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor( private GifsService:GifsService ){}


  get tags() {
    return this.GifsService.getTagsHistory()
  }

  searchTag(element:string){
    this.GifsService.searchTag(element)
  }



}
