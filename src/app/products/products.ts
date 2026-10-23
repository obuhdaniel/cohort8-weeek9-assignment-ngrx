import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from '../AppState/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { loadingProducts } from '../AppState/product/product.action';
import { addToCart, removeFromCart } from '../AppState/cart/cart.action';

@Component({
  selector: 'app-products',
  imports: [AsyncPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  productData$: Observable<IProduct[]>;
  cartData$: Observable<IProduct[]>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<{ products: IProduct[]; cart: IProduct[] }>,
  ) {
    this.productData$ = this.store.select('products');
    this.cartData$ = this.store.select('cart');
  }

  // passing the route query using navigate()
  viewDetails(id: number) {
    // console.log(id);
    this.router.navigate(['/product-details', id]);
  }

  // reading queryParameter using routerLink

  ngOnInit(): void {
    console.log('Product page is working');
    this.store.dispatch(loadingProducts());

    // this.activatedRoute.queryParamMap.subscribe({
    //   next: (data) => {
    //     const category = data.get('category');
    //     const sort = data.get('sort');
    //     console.log({ category, sort });
    //   },
    //   error(err) {
    //     console.log('I get error while retriving query');
    //   },
    //   complete: () => {
    //     console.log('I just finished getting the query');
    //   },
    // });
  }

  addProductToCart(product: IProduct) {
    this.store.dispatch(addToCart({ product }));
  }

  removeProductFromCart(id: number) {
    this.store.dispatch(removeFromCart({ id }));
  }

  isProductInCart(id: number, cartProducts: IProduct[]) {
    return cartProducts.some((product) => product.id === id);
  }

  // passing the queryParam using navigate() methods
  queryProduct(category: string, sort: string) {
    // console.log(id);
    this.router.navigate(['/products'], {
      queryParams: {
        category,
        sort,
      },
    });
    console.log({ category, sort });
  }
}
