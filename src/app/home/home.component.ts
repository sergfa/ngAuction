import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ProductItem } from '../models/product-item.model';

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductItem [] = [];
  
  constructor(private productService: ProductService) {
   }

  ngOnInit() {
    this.products = this.productService.getProducts();  
  }

}
