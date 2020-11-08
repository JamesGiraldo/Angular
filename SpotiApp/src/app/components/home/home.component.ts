import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor( ) {
    // EJEMPLO DE COMO HACER PETICONES HTTP A APIS CON private http: HttpClient
    //   paises: any[]= [];
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //          .subscribe( (resp: any) => {
    //            this.paises = resp;
    //            console.log(resp);
    //          })
  }

  ngOnInit(): void {
  }

}
