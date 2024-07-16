import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-navigation',
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
    const newId = parseInt(event.target.value, 10);
    if (newId > 0 && newId <= 898) {
      this.pokemonIdChange.emit(newId);
    } else {
      alert('Pokemon ID must be between 1 and 898');
    }
  }
}
