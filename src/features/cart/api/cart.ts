import type { CartProductItemData } from '../list-cart-products/types';
import { productToAddToCart } from '../add-cart-product/data/productToAddToCart';
export type ChangeInCartResponse = {
cartProducts: CartProductItemData[];
cartCount: number;
};
let cartProducts: CartProductItemData[] = [];
let cartCount = 0;
export const getCartCount = (): number => {return cartCount;}
export const getCartProducts = (): CartProductItemData[] => {return cartProducts;}
export const addProductToCart = (productId: string): Promise<ChangeInCartResponse> => {
    const isProductInCart = cartProducts.some((product) => product.id
    === productId);
    if (!isProductInCart) {
    const productToAdd = productToAddToCart[productId];
    cartProducts = [...cartProducts, productToAdd];
    cartCount += 1;
    }
    return Promise.resolve({ cartProducts, cartCount });
};
    export const removeProductFromCart = (
    productId: CartProductItemData['id'],
    ): Promise<ChangeInCartResponse> => {
    cartProducts = cartProducts.filter((cartProduct) => cartProduct.id
    !== productId);
    cartCount -= 1;
    return Promise.resolve({ cartProducts, cartCount });
    };