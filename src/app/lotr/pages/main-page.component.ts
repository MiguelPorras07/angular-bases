import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { LotrService } from '../services/lotr.service';

@Component({
  selector: 'app-lotr-main-page',
  templateUrl: `./main-page.component.html`
})

export class MainPageComponent {

    constructor ( private lotrService: LotrService ) {}

    get characters(): Character[] {
      return [...this.lotrService.characters];
    }

    onDeleteCharacter( id: string ):void {
      this.lotrService.deleteCharacterById( id );
    }

    onNewCharacter( character: Character ): void {
      this.lotrService.addCharacter( character );
    }
}


