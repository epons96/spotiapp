import { Component } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  loading: Boolean = true;
  nuevasCanciones: any[] = [];
  faExclamationTriangle = faExclamationTriangle;
  error: boolean;
  mensajeError: string = "";

  constructor( private spotify: SpotifyService ) {

    this.error = false;

    this.spotify.getNewReleases()
        .subscribe( data => {
            console.log(data);
            this.nuevasCanciones = data;
            this.loading = false;
          }, ( errorServicio ) =>{

            this.loading = false;
            this.error = true
            this.mensajeError = errorServicio.error.error.message;

          });

  }
}
