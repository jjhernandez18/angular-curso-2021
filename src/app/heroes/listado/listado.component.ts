import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Iron Man', 'Super Man', 'Hulk'];
  heroesEliminados: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(i: number) {
    this.heroesEliminados.push(this.heroes[i]);
    this.heroes.splice(i,1);
  }
}
