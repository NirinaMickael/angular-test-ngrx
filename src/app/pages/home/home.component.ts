import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../core/entity/item.interface';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../core/services/produit.service';
import { CardItemComponent } from './card-item/card-item.component';
import { PanierComponent } from '../panier/panier.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe,CardItemComponent,PanierComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  private readonly productSevice  = inject(ProductService)
  products!: Product[] ;
  isLoading:boolean=false;
  // addToCart(product: Product) {
  //   this.store.dispatch(addToCart({ product }));
  // }

  ngOnInit(): void {
    this.isLoading = true;
    this.productSevice.getProducts().subscribe((data)=>{
      this.products = data.map((product)=>{
        return {
          ...product,
          count:Math.floor(Math.random() * 10)
        }
      });
      this.isLoading = false
    })
  }
}
