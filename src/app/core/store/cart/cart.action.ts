import { createAction, props } from '@ngrx/store';
import { Product } from '../../entity/item.interface';

export const addToCart = createAction(
  '[Cart] Add to Cart',
  props<{ product: Product }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove from Cart',
  props<{ productId: number }>()
);


export const updateQuantity = createAction(
  '[Cart] Update Quantity',
  props<{ productId: number; quantity: number }>()
);
