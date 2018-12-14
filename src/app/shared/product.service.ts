import { Injectable } from '@angular/core';
import { ProductItem } from '../models/product-item.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  public getProducts(): ProductItem[] {
    return products.map(item => new ProductItem(item.id, item.price, item.title, item.description, item.rating, item.categories));
  }

  public getProductById(productId: number): ProductItem {
    return products.find(p => p.id === productId);
  }
}

const products = [
  {
    'id': 0,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Second Product',
    'price': 64.99,
    'rating': 3.5,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'categories': ['books']
  }];
