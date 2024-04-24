import { Component } from '@angular/core';
import { GoogleApiService } from '../../../shared/services/google-api-service.service';
import { Place, PlacesNearbySearchResponse } from '../../../shared/models/api-response.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  placesResponse: Place[]=[] ;
  
  constructor(private googleApi:GoogleApiService){
  }

  ngOnInit():void{
    this.googleApi.getNearbyPlaces(27.807489268118516,41.16279804357226,150).subscribe(
      (response)=>{
        this.placesResponse=response;
        console.log(this.placesResponse);
      },(error)=>{
        console.log(error);
      }
    );
  }

}
