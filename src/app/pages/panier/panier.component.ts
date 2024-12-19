import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem } from '../../core/entity/item.interface';
import { map, Observable } from 'rxjs';
import { selectCartItems, selectCartTotal } from '../../core/store/cart/cart.selector';
import { removeFromCart ,updateQuantity} from '../../core/store/cart/cart.action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent {

  cartItems$: Observable<CartItem[]> = this.store.select(selectCartItems);
  cartTotal$: Observable<number> = this.store.select(selectCartTotal);
  subtotal$: Observable<number> = this.cartItems$.pipe(
    map(items => this.calculateSubtotal(items))
  );
  constructor(private store: Store) {}

  removeItem(productId: number): void {
    this.store.dispatch(removeFromCart({ productId }));
  }

  updateQuantity(productId: number, quantity: number): void {
    this.store.dispatch(updateQuantity({ productId, quantity }));
  }

  closeCart(): void {
    // Logic to close the cart UI (if necessary)
  }

  checkout(): void {
    // Implement checkout logic
    console.log('Proceed to checkout');
  }
  calculateSubtotal(items: CartItem[]): number {
    return items.reduce((total, item) => total + item.quantity * item.product.price, 0);
  }
  continueShopping(): void {
    // Navigate back to the shopping page
    console.log('Continue shopping');
  }
}
