import type { Product } from '../types/types';
import { allProducts } from '../data/allProducts';

export const getProducts = (): Promise<Product[]> => {
    return Promise.resolve(allProducts);
};