import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon-service';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(public pokemonService: PokemonService) {}

  name: string = '';
  pokemon?: Pokemon | null = null;
  img: string = '';

  types = computed(() => {
    return (
      this.pokemonService.pokemon()?.types.map((type) => type.type.name) ?? []
    );
  });

  getInfo(): void {
    this.pokemonService.getPokemonByName(this.name);
  }
}
