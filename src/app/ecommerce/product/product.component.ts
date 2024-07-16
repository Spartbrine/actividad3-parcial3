import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchmlService } from '../../services/fetchml.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: FetchmlService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if(productId)
    {
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
      });
    }
  }
}
