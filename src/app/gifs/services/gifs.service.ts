import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})


export class GifsService {

  public gifsList: Gifs[] = []
  private apiUrl: string = 'https://api.giphy.com/v1/gifs'
  private _tagsHistory: string[] = [];
  private apiKey:string = 'RzMPEOhZQyOA9T25VRkq1kf68O56aTAJ';


  constructor( private http: HttpClient ) { }

  private organizeHistory(tag: string):void {


    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
    this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0,10)

  }

  searchTag (element: string ) {

    if (element.length === 0) return;
    this.organizeHistory(element)

    const params = new HttpParams().
    set('api_key', this.apiKey).
    set('limit', '10').
    set('q', element)


    this.http.get<SearchResponse>(`${this.apiUrl}/search`,{ params })
      .subscribe(response => {

        this.gifsList = response.data
    });

  }

  getTagsHistory() :string[] {
    return [...this._tagsHistory]
  }



}
