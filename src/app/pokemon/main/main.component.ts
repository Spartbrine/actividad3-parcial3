import { Component, inject } from '@angular/core';
import { FetcpokedexService } from '../../services/fetcpokedex.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Pokemon } from '../../models/pokedex.model';
import { PokemonNavigationComponent } from '../pokemon-navigation/pokemon-navigation.component';
import { PokemonStatsComponent } from '../pokemon-stats/pokemon-stats.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule,PokemonNavigationComponent,PokemonStatsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  pokemon!: Pokemon;
  isShiny: boolean = false;
  fetchPokedexService = inject(FetcpokedexService);

  ngOnInit() {
    this.getPokemon(1);
  }

  getPokemon(id: number) {
    this.fetchPokedexService.getPokemonById(id).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }

  toggleShiny() {
    this.isShiny = !this.isShiny;
    this.pokemon.sprites.front_default = this.isShiny ? this.pokemon.sprites.front_shiny : this.pokemon.sprites.front_default;
  }

  navigatePokemon(direction: 'previous' | 'next') {
    const id = direction === 'previous' ? this.pokemon.id - 1 : this.pokemon.id + 1;
    if (id > 0) {
      this.getPokemon(id);
    }
  }
}
