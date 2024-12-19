import { CartEffects } from "./cart/cart.effect"
import { cartReducer } from "./cart/cart.reducer"

// export const reducers =  {
//     counter : cartReducer
// }


export const metaEffects = [CartEffects]
export const metaReducers = cartReducer