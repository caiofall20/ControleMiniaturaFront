import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MiniaturaService {

  miniaturasUrl = 'http://localhost:8080/colecao/rest/carrinho';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    

    return this.http.get(`${this.miniaturasUrl}?carrinho`)
      .toPromise()
      .then(response => response.json())
  }

  adicionar(carrinho: any): Promise<any> {
    return this.http.post('http://localhost:8080/colecao/rest/carrinho/carrinho', carrinho)
    .toPromise()
    .then(response => response.json());
  }

}
