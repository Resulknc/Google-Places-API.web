import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleApiService } from '../../shared/services/google-api-service.service';
import { Place } from '../../shared/models/api-response.model';
import { ActivatedRoute } from '@angular/router';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 22.2736308,
      lng: 70.7512555
  };
  zoom = 6;

  /*------------------------------------------
  --------------------------------------------
  moveMap()
  --------------------------------------------
  --------------------------------------------*/
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  /*------------------------------------------
  --------------------------------------------
  move()
  --------------------------------------------
  --------------------------------------------*/
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  
  placesResponse: Place[]=[] ;

  mapOptions: google.maps.MapOptions = {
    center: { lat: this.route.snapshot.queryParams['latitude'], lng: this.route.snapshot.queryParams['longitude'] },
    zoom : 14
 }
 marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
 }

  constructor(private googleApi:GoogleApiService,
              private route:ActivatedRoute){

                     
    
  }

  ngOnInit():void{
    const longitude = this.route.snapshot.queryParams['longitude'];
    const latitude = this.route.snapshot.queryParams['latitude'];
    const radius = this.route.snapshot.queryParams['radius'];       

    this.googleApi.getNearbyPlaces(longitude, latitude, radius)
    .subscribe(
      (response)=>{
        this.placesResponse=response;
        console.table(this.placesResponse);
      },(error)=>{
        console.log(error);
      }
    ); 
   }

  

}
