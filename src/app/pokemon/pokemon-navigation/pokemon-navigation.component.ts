import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pokemon-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-navigation.component.html',
  styleUrl: './pokemon-navigation.component.scss'
})
export class PokemonNavigationComponent {
  @Input() pokemonId: number = 1;
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  @Output() pokemonIdChange = new EventEmitter<number>();

  onPokemonIdChange(event: any): void {
    this.pokemonIdChange.emit(parseInt(event.target.value, 10));
  }
}
