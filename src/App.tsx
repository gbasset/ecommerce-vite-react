import { useContext, useEffect } from 'react';
import Header from 'common/layout/Header/Header';
import { CartProductItemData } from 'features/cart/list-cart-products/types';
import { CartProductList } from 'features/cart/list-cart-products/ui';
import Product from 'features/product/display-product/ui/Product/Product';
import ProductList from 'features/product/list-product';
import { BrowserRouter, Route, Routes ,useMatch} from 'react-router-dom';
import { getProduct } from 'features/product/display-product/api/getProduct';
import { getCartProducts, removeProductFromCart, addProductToCart, getCartCount } from 'features/cart/api/cart';
import { getProducts } from 'features/product/list-product/api/getProducts';
import StoreContextProvider from 'common/store/StoreContextProvider';
import { StateContext } from './context/StateContext';
import { DispatchContext } from './context/DispatchContext';

function AppContent() {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    if (state === null) {
        throw new Error('AppContent must be used within StoreContextProvider');
    }

    const matchProductPage = useMatch('/product/:id');
    const matchCartPage = useMatch('/cart');
    const matchHomePage = useMatch('/');
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

    const fetchCartCount = async (): Promise<void> => {
        const initialCartCount = await getCartCount();
        dispatch({
            type: 'cartCount/fetched',
            payload: { cartCount: initialCartCount },
        });
    };
    useEffect(() => {
        fetchCartCount();
    }, []);
    
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

    return (<>
        <Header />
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
                        cartProducts={state.cartProducts}
                        removeFromCart={handleRemoveFromCart}
                    />
                }
            />
        </Routes>
    </>);
}

function App() {
    return (
        <BrowserRouter>
            <StoreContextProvider>
                <AppContent />
            </StoreContextProvider>
        </BrowserRouter>
    );
}

export default App;
