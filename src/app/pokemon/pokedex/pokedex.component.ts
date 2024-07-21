import { Component } from '@angular/core';
import { FetcpokedexService } from '../../services/fetcpokedex.service';
import { Pokemon } from '../../models/pokedex.model';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonStatsComponent } from '../pokemon-stats/pokemon-stats.component';
import { PokemonAbilitiesComponent } from '../pokemon-abilities/pokemon-abilities.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonNavigationComponent } from '../pokemon-navigation/pokemon-navigation.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [PokemonCardComponent, PokemonStatsComponent, PokemonAbilitiesComponent, CommonModule, FormsModule, PokemonNavigationComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent{
  pokemon: Pokemon | undefined;
  pokemonId: number = 1;
  shiny: boolean = false;

  constructor(private pokemonService: FetcpokedexService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.pokemonService.getPokemonById(this.pokemonId).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }

  toggleShiny(): void {
    this.shiny = !this.shiny;
  }

  nextPokemon(): void {
    this.pokemonId = this.pokemonId === 898 ? 1 : this.pokemonId + 1;
    this.loadPokemon();
  }

  previousPokemon(): void {
    this.pokemonId = this.pokemonId === 1 ? 898 : this.pokemonId - 1;
    this.loadPokemon();
  }

  onPokemonIdChange(newId: number): void {
    this.pokemonId = newId;
    this.loadPokemon();
  }
}
