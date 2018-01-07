import { PizzaGuard } from './pizza.guard';
import { ToppingsGuard } from './toppings.guard';
import { PizzaExistsGuard } from './pizza-exists.guard';

export const guards: any[] = [PizzaGuard, ToppingsGuard, PizzaExistsGuard];

export * from './pizza.guard';
export * from './toppings.guard';
export * from './pizza-exists.guard';
