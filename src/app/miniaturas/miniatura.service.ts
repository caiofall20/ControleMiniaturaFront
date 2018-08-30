import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Miniatura } from './miniatura.model';
import { ToastyService } from 'ng2-toasty';
@Injectable({
  providedIn: 'root'
})
export class MiniaturaService {

  miniaturasUrl = 'https://miniatura-api.herokuapp.com/carrinhos';

  constructor(private http: Http, private miniaturaService : MiniaturaService,private toasty: ToastyService,) { }

  pesquisar(): Promise<any> {
    

    return this.http.get(`${this.miniaturasUrl}`)
      .toPromise()
      .then(response => response.json())
  }

  getCarsSmall() {
    return this.http.get(`${this.miniaturasUrl}`)
      .toPromise()
      .then(response => response.json())
    }

  adicionar(miniatura: Miniatura): Promise<Miniatura> {
    return this.http.post('https://miniatura-api.herokuapp.com/carrinhos', miniatura)
    .toPromise()
    .then(response => response.json());
  }
excluir(id: number): Promise<void> {

  return this.http.delete(`${this.miniaturasUrl}${id}`)
  .toPromise()
  .then(() => null);

}
}
