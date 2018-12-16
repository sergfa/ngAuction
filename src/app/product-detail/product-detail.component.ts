import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductItem } from '../models/product-item.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductItem;
  constructor(private router:Router,  private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(this.onProductChange);
  }

  navigateBack() {
    this.router.navigate(['/']);
  }

  onProductChange = (params: ParamMap) => {
    const productId = Number(params.get('productId'));
    this.product = this.productService.getProductById(productId);
  }

}
