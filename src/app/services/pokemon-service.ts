import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { catchError, of, finalize, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  pokemon = signal<Pokemon | null>(null);
  error = signal<string>('');
  loading = signal<boolean>(false);

  getPokemonByName(pokemonName: string) {
    const name = pokemonName.trim().toLowerCase();
    this.loading.set(true);

    if (!name) {
      this.error.set('Ingresa el nombre de un Pokémon');
      this.pokemon.set(null);
      this.loading.set(false);
      return;
    }

    this.loading.set(true);
    this.error.set('');
    this.pokemon.set(null);

    this.http
      .get<Pokemon>(`${this.apiUrl}/${name}`)
      .pipe(
        catchError(() => {
          this.error.set('Pokémon no encontrado');
          return EMPTY;
        }),

        finalize(() => {
          this.loading.set(false);
        })
      )
      .subscribe((newPokemon) => {
        this.pokemon.set(newPokemon);
      });
  }
}
