export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
  species: {
    url: string;
  };
  description: string;
  evolutions: Evolution[];
}
export interface Evolution {
  name: string;
  imageUrl: string;
}

export interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
  };
}

export interface EvolutionChain {
  chain: EvolutionChainLink;
}

export interface EvolutionChainLink {
  species: {
    name: string;
    url: string;
  };
  evolves_to: EvolutionChainLink[];
}
