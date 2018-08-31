import { Miniatura } from './../miniatura.model';
import { Component, OnInit } from '@angular/core';
import { MiniaturaService } from '../miniatura.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-miniatura-controle',
  templateUrl: './miniatura-controle.component.html',
  styleUrls: ['./miniatura-controle.component.css']
})
export class MiniaturaControleComponent implements OnInit {
miniatura = new Miniatura();

  displayDialog: boolean;
 
  car : Miniatura = {};

  selectedCar: Miniatura;

  newCar: boolean;

  cars: Miniatura[];

  cols: any[];

  constructor(private miniaturaService: MiniaturaService,  private toasty: ToastyService) { }

  ngOnInit() {
      this.miniaturaService.getCarsSmall().then(cars => this.cars = cars);

      this.cols = [
        { field: 'modelo', header: 'Modelo' },
        { field: 'marca', header: 'Marca' },
        { field: 'escala', header: 'Escala' },
        { field: 'ano', header: 'Ano' }
      ];
  }

  showDialogToAdd() {
      this.newCar = true;
      this.car = {};
      this.displayDialog = true;
  }

  save() {
    this.miniaturaService.adicionar(this.miniatura)
    .then(() => {
      this.toasty.success('Miniatura adicionada com sucesso!');     
      this.miniatura = new Miniatura();
    })
    //   let cars = [...this.cars];
    //   if (this.newCar)
    //       cars.push(this.car);
    //   else
    //       cars[this.cars.indexOf(this.selectedCar)] = this.car;

    //   this.cars = cars;
    //   this.car = null;
    //   this.displayDialog = false;
  }

  delete() {
      let index = this.cars.indexOf(this.selectedCar);
      this.cars = this.cars.filter((val, i) => i != index);
      this.car = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newCar = false;
      this.car = this.cloneCar(event.data);
      this.displayDialog = true;
  }

  cloneCar(c: Miniatura): Miniatura {
      let miniaturas = {};
      for (let prop in c) {
          miniaturas[prop] = c[prop];
      }
      return miniaturas;
  }
}
