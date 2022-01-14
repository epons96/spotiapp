import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCUnRTutpxP9NxiwvVJNAJeHq5jQq6Kl30y2EIiZfDQOE3Aa7FFtt0rMn2vL7U3wQjFhjxkAqAFb3K0x3U'
    })

    return this.http.get(url, { headers });
  }


  getNewReleases(){

    return this.getQuery('browse/new-releases')
               .pipe( map( (data: any) => data.albums.items ));

  }

  getArtistas( termino:string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
               .pipe( map( (data: any) => data.artists.items
               ));
  }

  getArtista( id:string ){

    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id:string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
               .pipe( map( (data: any) => data.tracks
               ));
  }
}
