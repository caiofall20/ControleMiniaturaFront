import { MiniaturaService } from '../miniatura.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
@Component({
  selector: 'app-miniaturas-pesquisa',
  templateUrl: './miniaturas-pesquisa.component.html',
  styleUrls: ['./miniaturas-pesquisa.component.css']
})
export class MiniaturasPesquisaComponent implements OnInit {
  miniaturas = [];
  cols: any[];
  @ViewChild('tabela') grid;

  constructor(private miniaturaService: MiniaturaService, private toasty: ToastyService, private confirmation: ConfirmationService) { }

  ngOnInit() {
    this.cols = [
      { field: 'modelo', header: 'Modelo' },
      { field: 'marca', header: 'Marca' },
      { field: 'escala', header: 'Escala' },
      { field: 'ano', header: 'Ano' }
  ];
    this.pesquisar();
  }

  pesquisar() {
    this.miniaturaService.pesquisar()
      .then(miniaturas => this.miniaturas = miniaturas)
  }

 
  excluir(miniatura: any) {
    this.miniaturaService.excluir(miniatura.id)
    .then(() => {
      if (this.grid.first === 0) {
        this.pesquisar();
      } else {
        this.grid.first = 0;
      }

      this.toasty.success('Miniatura excluída com sucesso!');
    });
}

}
