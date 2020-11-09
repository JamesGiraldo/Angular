import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
        'Authorization': 'Bearer BQAIKYekgA0hDYzV-PnxNLBLfrO8hlA9ycdbomijq7XBX4zOK4xFcRzrqUDQX-CU82Rb9qxXrB-JmatOkWFELoW-OaGLtrLe2DEvAkQbM4qfWc1ThUIma6hkwHsttamRX6js-yAzD2FmNyIIZqVLG-x6lYT8jY4'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( (data: any) => {
                    return data.albums.items;
                }));
  }

  getArtistas( termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
               .pipe( map( (data: any) => data.artists.items));
  }

  getArtista( id: string){
    return this.getQuery(`artists/${ id }`);
               // .pipe( map( (data: any) => data.artists.items));
  }

}
