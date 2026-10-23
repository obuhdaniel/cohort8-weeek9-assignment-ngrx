import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../store';
import { addToCart, removeFromCart } from './cart.action';

export const intialState: Array<IProduct> = [];

export const cartReducer = createReducer(
  intialState,
  on(addToCart, (state, action) => {
    const productExists = state.some((product) => product.id === action.product.id);

    if (productExists) {
      return state;
    }

    return [...state, action.product];
  }),
  on(removeFromCart, (state, action) => {
    return state.filter((product) => product.id !== action.id);
  }),
);
