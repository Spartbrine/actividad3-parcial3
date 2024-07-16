import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokedex.model';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartType, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-pokemon-stats',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './pokemon-stats.component.html',
  styleUrl: './pokemon-stats.component.scss'
})
export class PokemonStatsComponent {
  @Input() pokemon: Pokemon | undefined;

  radarChartOptions: ChartOptions<'radar'> = {
    responsive: true,
  };
  radarChartLabels: string[] = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'];
  radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: []
  };

  ngOnChanges(): void {
    if (this.pokemon) {
      this.radarChartData.datasets = [{
        data: this.pokemon.stats.map(stat => stat.base_stat),
        label: this.pokemon.name,
      }];
    }
  }
}

