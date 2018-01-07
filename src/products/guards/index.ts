import { PizzaGuard } from './pizza.guard';
import { PizzaExistsGuard } from './pizza-exists.guard';

export const guards: any[] = [PizzaGuard, PizzaExistsGuard];

export * from './pizza.guard';
export * from './pizza-exists.guard';
