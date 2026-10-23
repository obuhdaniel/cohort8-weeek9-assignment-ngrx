import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeFromCart } from '../AppState/cart/cart.action';
import { IProduct } from '../AppState/store';

@Component({
  selector: 'app-cart',
  imports: [AsyncPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartData$: Observable<IProduct[]>;

  constructor(private store: Store<{ cart: IProduct[] }>) {
    this.cartData$ = this.store.select('cart');
  }

  removeProductFromCart(id: number) {
    this.store.dispatch(removeFromCart({ id }));
  }
}
