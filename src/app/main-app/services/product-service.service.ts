import { Injectable } from '@angular/core';
import { Product } from '../../model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productList = [new Product(6, 'canon', 'description of product6', 100, 50),
    new Product(7, 'verbatim', 'description of product7', 200, 2),
    new Product(8, 'nokia', 'description of product8', 300, )];

  constructor() { }

  getProducts(): Promise<Product[]>{
    return new Promise(resolve => resolve(this.productList));
  }

  addProduct(product: Product): Promise<number>{
    return new Promise(resolve => resolve(this.productList.push(product)));
  }

}
