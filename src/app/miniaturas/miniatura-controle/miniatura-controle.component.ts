import { Miniatura } from './../miniatura.model';
import { Component, OnInit } from '@angular/core';
import { MiniaturaService } from '../miniatura.service';

@Component({
  selector: 'app-miniatura-controle',
  templateUrl: './miniatura-controle.component.html',
  styleUrls: ['./miniatura-controle.component.css']
})
export class MiniaturaControleComponent implements OnInit {

  displayDialog: boolean;
 
  miniaturas : Miniatura = {};

  selectedCar: Miniatura;

  newCar: boolean;

  cars: Miniatura[];

  cols: any[];

  constructor(private miniaturaService: MiniaturaService) { }

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
      this.miniaturas = {};
      this.displayDialog = true;
  }

  save() {
      let cars = [...this.cars];
      if (this.newCar)
          cars.push(this.miniaturas);
      else
          cars[this.cars.indexOf(this.selectedCar)] = this.miniaturas;

      this.cars = cars;
      this.miniaturas = null;
      this.displayDialog = false;
  }

  delete() {
      let index = this.cars.indexOf(this.selectedCar);
      this.cars = this.cars.filter((val, i) => i != index);
      this.miniaturas = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newCar = false;
      this.miniaturas = this.cloneCar(event.data);
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
