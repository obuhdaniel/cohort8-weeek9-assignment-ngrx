import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../store';
import { loadingProducts } from './product.action';

export const intialState: Array<IProduct> = [];

const products: Array<IProduct> = [
  {
    id: 1,
    productName: 'Camera Pro',
    productPrice: '$150',
    productImagePath: 'product1.png',
    quantity: 1,
    rating: 4.5,
    category: 'Camera',
  },
  {
    id: 2,
    productName: 'Apple Watch',
    productPrice: '$300',
    productImagePath: 'product2.png',
    quantity: 2,
    rating: 4.8,
    category: 'Watch',
  },
];

export const productReducer = createReducer(
  intialState,
  on(loadingProducts, () => {
    return products;
  }),
);
