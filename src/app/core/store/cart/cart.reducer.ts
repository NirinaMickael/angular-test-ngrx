import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, updateQuantity } from './cart.action';
import { CartItem } from '../../entity/item.interface';

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    console.log("addToCart",addToCart);
    
    const item = state.items.find(i => i.product.id === product.id);
    if (item) {
      return {
        ...state,
        items: state.items.map(i =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    }
    return { ...state, items: [...state.items, { product, quantity: 1 }] };
  }),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(i => i.product.id !== productId),
  })),
  on(updateQuantity, (state, { productId, quantity }) => ({
    ...state,
    items: state.items.map(i =>
      i.product.id === productId ? { ...i, quantity } : i
    ),
  }))
);
