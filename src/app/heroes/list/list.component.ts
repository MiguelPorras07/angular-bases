import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Capitán América', 'Spiderman', 'Hulk', 'Doctor Strange', 'Wolverine'];
  public deletedHero?: string;


// para que el valor de abajo (deletedHero) aparezca dentro de la clase, hay que volverlo una propiedad
// de clase...

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();

  }

}
