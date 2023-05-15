import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  pokemonType: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }
  searchTerm: string;

  search() {
    this.pokemonService.getPokemonType(this.searchTerm).subscribe(
      type => {
        this.pokemonType = type;
      },
      error => console.log(error)
    );
  }

}
