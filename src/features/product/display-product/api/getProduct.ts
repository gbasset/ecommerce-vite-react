import { productToDisplay } from '../data/ productToDisplay';
import { ProductData } from '../types/types';
export const getProduct = (productId: string): Promise<ProductData> => {
const product = productToDisplay[productId];
return Promise.resolve(product);
};