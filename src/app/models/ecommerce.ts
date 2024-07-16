export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  condition: string;
  thumbnail: string;
  permalink: string;
}

export interface SearchResponse {
  site_id: string;
  query: string;
  paging: Paging;
  results: Product[];
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}
