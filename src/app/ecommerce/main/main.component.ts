import { Component } from '@angular/core';
import { FetchmlService } from '../../services/fetchml.service';
import { Category, Product, SearchResponse } from '../../models/ecommerce';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  categories: Category[] = [];
  products: Product[] = [];
  page: number = 1;
  totalPages: number = 0;
  pages: number[] = [];
  startPage: number = 1;
  endPage: number = 5;

  constructor(private mercadoLibreService: FetchmlService, private router : Router) {}

  ngOnInit() {
    this.mercadoLibreService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  redirectProduct(id: string){
    this.router.navigateByUrl(`/ecommerce/product/${id}`)
  }

  onCategoryChange(event: Event) {
    const categoryId = (event.target as HTMLSelectElement).value;
    this.page = 1;
    this.startPage = 1;
    this.endPage = 5;
    this.fetchProducts(categoryId, 0);
  }

  fetchProducts(categoryId: string, offset: number) {
    this.mercadoLibreService.getProductsByCategory(categoryId, offset).subscribe((response: SearchResponse) => {
      this.products = response.results;
      this.totalPages = Math.ceil(response.paging.total / response.paging.limit);
      this.updateVisiblePages();
    });
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.page = page;
    const offset = (page - 1) * 20;
    const categoryId = (document.getElementById('categories') as HTMLSelectElement).value;
    this.fetchProducts(categoryId, offset);
    this.updateVisiblePages();
  }

  updateVisiblePages() {
    if (this.totalPages <= 5) {
      this.startPage = 1;
      this.endPage = this.totalPages;
    } else if (this.page <= 3) {
      this.startPage = 1;
      this.endPage = 5;
    } else if (this.page + 2 >= this.totalPages) {
      this.startPage = this.totalPages - 4;
      this.endPage = this.totalPages;
    } else {
      this.startPage = this.page - 2;
      this.endPage = this.page + 2;
    }
    this.pages = Array.from({ length: (this.endPage - this.startPage + 1) }, (_, i) => i + this.startPage);
  }

  get visiblePages(): number[] {
    return this.pages;
  }
}
