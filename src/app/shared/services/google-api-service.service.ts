import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place, PlacesNearbySearchResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService{
  
  private backendUrl='http://localhost:8080/apicall/';

  constructor(private http: HttpClient) { }


  getNearbyPlaces( longitude:number, latitude:number,radius:number):Observable<Place[]>{
    let params = new HttpParams()
    .set('longitude', longitude)
    .set('latitude', latitude)
    .set('radius', radius);
    return this.http.get<any>(this.backendUrl+'apicall',{params});
  }

}
