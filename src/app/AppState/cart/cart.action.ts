import { createAction, props } from '@ngrx/store';
import { IProduct } from '../store';

export const addToCart = createAction('add to cart', props<{ product: IProduct }>());
export const removeFromCart = createAction('remove from cart', props<{ id: number }>());
