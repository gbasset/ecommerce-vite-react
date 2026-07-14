import { CartProductItemData } from "features/cart/list-cart-products/types";
import { Product } from "features/product/list-product/types/types";
import { ProductData } from "features/product/display-product/types/types";

export interface StateData {
    products: Product[];
    product: ProductData;
    cartCount: number;
    cartProducts: CartProductItemData[];
}