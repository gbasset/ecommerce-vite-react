import { StateData } from "./types";
import { allProducts } from 'features/product/list-product/data/allProducts';
import { productToDisplay } from "features/product/display-product/data/ productToDisplay";

export const initialState: StateData = {
    products: allProducts,
    product: productToDisplay['1'],
    cartCount: 0,
    cartProducts: [],
};
