import { Component } from '@angular/core';
import { PokemonService } from './service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
