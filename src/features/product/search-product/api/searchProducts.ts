import { allProducts } from '../../list-product/data/allProducts';
import type { Product } from '../../list-product/types/types';


export const handleSubmit = (search: string) : Promise<Product[]>=> {
    const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    return Promise.resolve(filteredProducts);
};