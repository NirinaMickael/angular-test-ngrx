import { Component, Input } from '@angular/core';
import { Product } from '../../../core/entity/item.interface';
import { CurrencyPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToCart } from '../../../core/store/cart/cart.action';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input()product !: Product;
  constructor(private store: Store) {}
  onAddpanier(product:Product) {
    this.store.dispatch(addToCart({product: product }));
  }
}
