

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Http, RequestOptionsArgs } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Usuario } from 'src/app/login/usuario.model';

@Injectable()
export class LoginService {

  private urlRest: string;
  private opcoes;
  private headers: Headers;
  autenticou: boolean = false;

  constructor(private http: Http, private router: Router) {
    this.urlRest = `http://localhost:8080/colecao/rest/login`;
    this.headers = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Content-Type": "application/json" 
    });
    this.opcoes = { headers: this.headers };
  }

  autenticar(usuario: Usuario): Observable<any> {

    return this.http.post(this.urlRest, usuario, this.opcoes)
      .map(res => {
        this.handleData(res);
      })
  }

  handleData(response) {
    
    return response.json();
  }

  proximaPagina() {
    this.router.navigate(['inicio']);
  }

}
