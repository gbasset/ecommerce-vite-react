import { StateData } from "common/states/types";
import { ActionData } from "common/actions/types";
export const reducer = (state: StateData, action: ActionData): StateData => {
    switch (action.type) {
        case "products/fetched": {
            const newState = {
                ...state,
                products: action.payload.products,
            };
            return newState;
        }
        case "products/filtered": {
            const newState = {
                ...state,
                products: action.payload.products,
            };
            return newState;
        }
        case "product/fetched": {
            const newState = {
                ...state,
                product: action.payload.product,
            };
            return newState;
        }
        case "cartCount/fetched": {
            const newState = {
                ...state,
                cartCount: action.payload.cartCount,
            };
            return newState;
        }
        case "cartProducts/fetched": {
            const newState = {
                ...state,
                cartProducts: action.payload.cartProducts,
            };
            return newState;
        }
        case "cart/added": {
            const updatedCart = action.payload;
            const newState = {
                ...state,
                cartProducts: updatedCart.cartProducts,
                cartCount: updatedCart.cartCount,
            };
            return newState;
        }
        case "cart/removed": {
            const updatedCart = action.payload;
            const newState = {
                ...state,
                cartProducts: updatedCart.cartProducts,
                cartCount: updatedCart.cartCount,
            };
            return newState;
        }
        default:
            return state;
    }
}