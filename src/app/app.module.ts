import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { GoogleMapsModule } from '@angular/google-maps'
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { AppComponent } from './app.component';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HomeComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    GoogleMapsModule,
  ],
  providers:[
    
  ]
})
export class AppModule { }
