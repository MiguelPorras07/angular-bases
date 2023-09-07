
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class LotrService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Gimli',
    power: 2000
  },{
    id: uuid(),
    name: 'Aragorn',
    power: 2300
  },{
    id: uuid(),
    name: 'Gandalf',
    power: 5000
  }];

  addCharacter( character: Character ): void {

    const newCharacter: Character = { id: uuid(), ...character };


    this.characters.push(character);
  }

  // onDeleteCharacter( index:number ) {
  //   this.characters.splice(index,1);
  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}

