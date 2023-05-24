import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html'
})
export class PokemonSearchComponent implements OnInit {

  pokemonType: string;
  isAPICallErrored: boolean;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }
  searchTerm: string;

  search() {
    this.pokemonService.getPokemonType(this.searchTerm).subscribe(
      type => {
        this.pokemonType = type;
        this.isAPICallErrored = false;
      },
      error => {
        if(error){
          this.isAPICallErrored = true;
          console.log(this.isAPICallErrored);
        }
      }
    );
  }

}
