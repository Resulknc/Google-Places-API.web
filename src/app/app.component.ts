import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {} from 'googlemaps';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Google-Places-API.web';
}
