import { CartProductItemData } from "features/cart/list-cart-products/types";
import { ProductData } from "features/product/display-product/types/types";

export interface StateData {
    products: ProductData[];
    product: ProductData;
    cartCount: number;
    cartProducts: CartProductItemData[];
}