import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../entity/item.interface';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly mainService = inject(MainService)
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.mainService.GET('products');
  }
}
