import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'lotr-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Input()
  public characterList: Character[] = [{
    name: 'Legolas',
    power: 2300
  }];

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?: string ):void {

    if ( !id ) return;

    this.onDelete.emit ( id );

  }

}
