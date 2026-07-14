import { CartProductItemData } from "features/cart/list-cart-products/types";
import { Product } from "features/product/list-product/types/types";
import { ProductData } from "features/product/display-product/types/types";

interface ProductsFetchedActionData {
    type: 'products/fetched';
    payload: {
        products: Product[];
    };
}

interface ProductsFilteredActionData {
    type: 'products/filtered';
    payload: {
        products: Product[];
    };
}
interface ProductFetchedActionData {
    type: 'product/fetched';
    payload: {
        product: ProductData;
    };
}
interface CartCountFetchedActionData {
    type: 'cartCount/fetched';
    payload: {
        cartCount: number;
    };
}
interface CartProductsFetchedActionData {
    type: 'cartProducts/fetched';
    payload: {
        cartProducts: CartProductItemData[];
    };
}
interface CartAddedActionData {
    type: 'cart/added';
    payload: {
        cartProducts: CartProductItemData[];
        cartCount: number;
    };
}
interface CartRemovedActionData {
    type: 'cart/removed';
    payload: {
        cartProducts: CartProductItemData[];
        cartCount: number;
    };
}

export type ActionData = ProductsFetchedActionData | ProductsFilteredActionData | ProductFetchedActionData | CartCountFetchedActionData | CartProductsFetchedActionData | CartAddedActionData | CartRemovedActionData;