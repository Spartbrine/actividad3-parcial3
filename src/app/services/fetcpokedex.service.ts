import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EvolutionChain, EvolutionChainLink, Pokemon, PokemonSpecies } from '../models/pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class FetcpokedexService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`).pipe(
      switchMap(pokemon => this.getPokemonDetails(pokemon))
    );
  }

  private getPokemonDetails(pokemon: Pokemon): Observable<Pokemon> {
    return forkJoin({
      description: this.http.get<PokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
        .pipe(map(data => data.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || '')),
      evolutions: this.http.get<EvolutionChain>(pokemon.species.url)
        .pipe(map(data => this.extractEvolutions(data.chain)))
    }).pipe(
      map(details => ({
        ...pokemon,
        description: details.description,
        evolutions: details.evolutions
      }))
    );
  }

  private extractEvolutions(chain: EvolutionChainLink): { name: string; imageUrl: string }[] {
    let evolutions: { name: string; imageUrl: string }[] = [];
    let current: EvolutionChainLink | undefined = chain;

    while (current) {
      evolutions.push({
        name: current.species.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${current.species.url.split('/')[6]}.png`
      });
      current = current.evolves_to[0];
    }

    return evolutions;
  }
}
