import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonType(name: string): Observable<string> {
    name=name.toLowerCase();
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
      map(response => response.types[0].type.name)
    );
  }
}
