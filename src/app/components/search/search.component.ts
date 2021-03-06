import { Component } from '@angular/core';
import { map } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  loading!: boolean;
  artistas: any []= [];

  constructor( private spotify: SpotifyService ) { }

  buscar( termino: string ){

    this.loading = true;
    this.spotify.getArtistas( termino )
        .subscribe( data => {
            this.artistas = data;
            this.loading = false;
        })
        }

  }

