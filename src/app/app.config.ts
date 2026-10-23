import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { empReducer } from './AppState/employer/employer.reducer';
import { counterReducer } from './AppState/counter/counter.reducer';
import { todoReducer } from './AppState/todo/todo.reducer';
import { todoEffects } from './AppState/todo/todo.effects';
import { productReducer } from './AppState/product/product.reducer';
import { cartReducer } from './AppState/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      employer: empReducer,
      counter: counterReducer,
      todos: todoReducer,
      products: productReducer,
      cart: cartReducer,
    }),
    provideEffects([todoEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ],
};
