import { createContext } from 'react';
import type { CartProductItemData } from '../features/cart/list-cart-products/types';

export const StateContext = createContext<CartProductItemData[] | null>(null);
