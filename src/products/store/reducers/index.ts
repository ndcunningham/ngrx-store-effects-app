import * as fromPizzas from './pizzas.reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);
