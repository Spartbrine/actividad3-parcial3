import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokedex.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-abilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-abilities.component.html',
  styleUrl: './pokemon-abilities.component.scss'
})
export class PokemonAbilitiesComponent {
  @Input() pokemon: Pokemon | undefined;

}
