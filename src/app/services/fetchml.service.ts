import { Injectable } from '@angular/core';
import { Category, SearchResponse } from '../models/ecommerce';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchmlService {

  private apiUrl = 'https://api.mercadolibre.com';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/sites/MLA/categories`);
  }

  getProductsByCategory(categoryId: string, offset: number = 0, limit: number = 12): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(`${this.apiUrl}/sites/MLA/search?category=${categoryId}&offset=${offset}&limit=${limit}`);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
