import { Component } from '@angular/core';
import { PokemonService } from './service/pokemon.service';

@Component({
  selector: 'app-root',
  template: '<h1>{{ pokemonType }}</h1>',
})
export class AppComponent {
  pokemonType: string;

  constructor(private pokemonService: PokemonService) {
    this.pokemonService.getPokemonType('pikachu').subscribe(
      type => {
        this.pokemonType = type;
        console.log(this.pokemonType);
      },
      error => console.log(error)
    );
  }
}
