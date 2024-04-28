import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../../shared/services/google-api-service.service';
import { Place, PlacesNearbySearchResponse } from '../../shared/models/api-response.model';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private router:Router){
  }
  

  ngOnInit():void{
  }

  onButtonClick(longitude:number, latitude:number, radius:number){
    this.router.navigate(['/map'],{queryParams:{longitude:longitude,latitude:latitude,radius:radius}})
  }
}
