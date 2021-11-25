import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  template: `
      <h1>{{ titulo }}</h1>

    <button (click)="operacion(base)">+ {{ base }}</button>
    <span> {{ numero }}</span>
    <button (click)="operacion(-base)">- {{ base }}</button>
  `
})
export class ContadorComponent {
  titulo: string = 'Contador APP';
  numero: number = 10;
  base  : number = 5;
  operacion(num: number) {
    this.numero = this.numero + num;
  }
}
