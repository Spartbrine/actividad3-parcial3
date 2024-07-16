import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokedex.model';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon | undefined;
  @Input() shiny: boolean = false;

  get imageUrl(): string {
    return this.shiny ? this.pokemon?.sprites.front_shiny || '' : this.pokemon?.sprites.front_default || '';
  }
}
