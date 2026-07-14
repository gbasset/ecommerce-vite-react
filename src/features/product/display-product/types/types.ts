import type { Product } from 'features/product/list-product/types/types';

export interface ProductData extends Product {
    description: string;
}
