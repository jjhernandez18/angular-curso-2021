import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  nombre: string = 'Iron Man';
  edad  : number = 21;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre() {
    this.nombre = 'Spiderman';
  }

  cambiarEdad() {
    this.edad = 18;
  }
}
