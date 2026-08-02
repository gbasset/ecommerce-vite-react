import { useEffect, useReducer } from 'react';
import Header from 'common/layout/Header/Header';
import { CartProductItemData } from 'features/cart/list-cart-products/types';
import { CartProductList } from 'features/cart/list-cart-products/ui';
import Product from 'features/product/display-product/ui/Product/Product';
import ProductList from 'features/product/list-product';
import { BrowserRouter, Route, Routes ,useMatch} from 'react-router-dom';
import {reducer} from './common/reducer/index';
import { handleSubmit } from 'features/product/search-product/api/searchProducts';
import { getProduct } from 'features/product/display-product/api/getProduct';
import { getCartProducts, removeProductFromCart, addProductToCart } from 'features/cart/api/cart';
import { getProducts } from 'features/product/list-product/api/getProducts';
import { initialState } from 'common/states/initialState';

function AppContent() {

    const matchProductPage = useMatch('/product/:id');
    const matchCartPage = useMatch('/cart');
    const matchHomePage = useMatch('/');
    const [state, dispatch] = useReducer(reducer, initialState);

    const cartCount = state.cartProducts.length;
    const onSubmit = async (search: string) => {
        const filteredProducts = await handleSubmit(search);
        dispatch({
            type: 'products/filtered',
            payload: { products: filteredProducts },
        });
    };
    const handleRemoveFromCart = async (productId: CartProductItemData['id']) => {
        const updateCart = await removeProductFromCart(productId);
        dispatch({
            type: 'cart/removed',
            payload:  updateCart ,
        });
    };
    const handleAddToCart = async(productId: string) => {
        if((!productId) || (productId === '')) {
            return;
        }
        const updateCart = await addProductToCart(productId);
        dispatch({
            type: 'cart/added',
            payload: updateCart,
        });
    };
    const fetchProduct = async (productId: string): Promise<void> => {
        const product = await getProduct(productId);
        dispatch({
            type: 'product/fetched',
            payload: { product },
        });
    };
    const fetchProducts = async (): Promise<void> => {
        const initialProducts = await getProducts();
        dispatch({
            type: 'products/fetched',
            payload: { products: initialProducts },
        });
    };
    const fetchCartProducts = async (): Promise<void> => {
        const initialCartProducts = await getCartProducts();
        dispatch({
            type: 'cartProducts/fetched',
            payload: { cartProducts: initialCartProducts },
        });
    };

    useEffect(() => {
        if (matchHomePage) {
            fetchProducts();
        }
        if (matchCartPage) {
            fetchCartProducts();
        }
    }, []);

    useEffect(() => {
        const productId = matchProductPage?.params.id;
        if (productId) {
            fetchProduct(productId);
        }
    }, [matchProductPage]);

    return (
        <>
            <Header onSubmit={onSubmit} cartCount={cartCount} />
            <Routes>
                <Route path="/" element={<ProductList products={state.products} />} />
                <Route
                    path="/product/:id"
                    element={<Product product={state.product} addToCart={() => handleAddToCart(state.product?.id ?? '')} />}
                />
                <Route
                    path="/cart"
                    element={
                        <CartProductList
                        />
                    }
                />
            </Routes>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
