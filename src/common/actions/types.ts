import { CartProductItemData } from "features/cart/list-cart-products/types";
import { ProductData } from "features/product/display-product/types/types";

interface ProductsFetchedActionData {
    type: 'products/fetched';
    payload: {
        products: ProductData[];
    };
}

interface ProductsFilteredActionData {
    type: 'products/filtered';
    payload: {
        products: ProductData[];
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