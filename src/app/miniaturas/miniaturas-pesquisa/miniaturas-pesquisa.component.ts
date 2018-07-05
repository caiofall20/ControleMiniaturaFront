import { MiniaturaService } from './../miniatura.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniaturas-pesquisa',
  templateUrl: './miniaturas-pesquisa.component.html',
  styleUrls: ['./miniaturas-pesquisa.component.css']
})
export class MiniaturasPesquisaComponent implements OnInit {
  miniaturas = [];

  constructor(private miniaturaService: MiniaturaService) {}

  ngOnInit(){
    this.pesquisar();
  }

  pesquisar() {
    this.miniaturaService.pesquisar()
    .then(miniaturas => this.miniaturas = miniaturas)
  }
}
