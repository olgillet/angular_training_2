import { Injectable } from '@angular/core';
import { Supplier } from '../../model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

  supplierList = [new Supplier(4, 'cpte4', 'AT1234567890'),
    new Supplier(5, 'cpte5', 'AT098765432112'),
    new Supplier(6, 'cpte6', 'AT5646546465')
  ];

  constructor() { }

  getSuppliers(): Promise<Supplier[]>{
    return new Promise(resolve => resolve(this.supplierList));
  }
}
