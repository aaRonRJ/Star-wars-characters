import { Component } from '@angular/core';

import { PERSONAJES } from '../../data/personajes.data';
import { CharacterPage } from '../index.pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  characters: any[];
  characterPage = CharacterPage;

  constructor() {
    this.characters = PERSONAJES;
  }
}
