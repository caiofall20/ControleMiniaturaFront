import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Miniatura } from './miniatura.model';
import { ToastyService } from 'ng2-toasty';
@Injectable({
  providedIn: 'root'
})
export class MiniaturaService {

  miniaturasUrl = 'http://localhost:8080/colecao/rest/carrinho';

  constructor(private http: Http, private miniaturaService : MiniaturaService,private toasty: ToastyService,) { }

  pesquisar(): Promise<any> {
    

    return this.http.get(`${this.miniaturasUrl}?carrinho`)
      .toPromise()
      .then(response => response.json())
  }

  adicionar(miniatura: Miniatura): Promise<Miniatura> {
    return this.http.post('http://localhost:8080/colecao/rest/carrinho/carrinho', miniatura)
    .toPromise()
    .then(response => response.json());
  }

}
