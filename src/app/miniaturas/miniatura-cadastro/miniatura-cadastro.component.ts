
import { Component, OnInit } from '@angular/core';
import { Miniatura } from '../miniatura.model';
import { MiniaturaService } from '../miniatura.service';
import { FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-miniatura-cadastro',
  templateUrl: './miniatura-cadastro.component.html',
  styleUrls: ['./miniatura-cadastro.component.css']
})
export class MiniaturaCadastroComponent implements OnInit {
  miniatura = new Miniatura();

  constructor(
    private miniaturaService: MiniaturaService,
    private toasty: ToastyService,
  ) { }

  ngOnInit() {

  }

  salvar(form: FormControl) {
    this.miniaturaService.adicionar(this.miniatura)
    .then(() => {
      this.toasty.success('Miniatura adicionada com sucesso!');

      form.reset();
      this.miniatura = new Miniatura();
    })
  }
  
}
  