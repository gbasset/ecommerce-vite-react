import { useEffect, useState } from 'react';
import Header from 'common/layout/Header/Header';
import { CartProductItemData } from 'features/cart/list-cart-products/types';
import { CartProductList } from 'features/cart/list-cart-products/ui';
import Product from 'features/product/display-product/ui/Product/Product';
import ProductList from 'features/product/list-product';
import type { Product as ListProduct } from 'features/product/list-product/types/types';
import type { ProductData } from 'features/product/display-product/types/types';
import { BrowserRouter, Route, Routes ,useMatch} from 'react-router-dom';
import { productToDisplay } from 'features/product/display-product/data/ productToDisplay';

import { handleSubmit } from 'features/product/search-product/api/searchProducts';
import { getProduct } from 'features/product/display-product/api/getProduct';
import { getCartProducts, removeProductFromCart } from 'features/cart/api/cart';
import { getProducts } from 'features/product/list-product/api/getProducts';

function AppContent() {

    const matchProductPage = useMatch('/product/:id');
    const matchCartPage = useMatch('/cart');
    const matchHomePage = useMatch('/');

    const [products, setProducts] = useState<ListProduct[]>([]);
    const [product, setProduct] = useState<ProductData>();
    const [cartProducts, setCartProducts] = useState<CartProductItemData[]>( [{
        id: '1',
        name: 'Product 1',
        price: 100,
        picture: '',
    }]);
    const cartCount = cartProducts.length;
    const onSubmit = async (search: string) => {
        const filteredProducts = await handleSubmit(search);
        setProducts(filteredProducts);
    };
    const handleRemoveFromCart = async (productId: CartProductItemData['id']) => {
        const updateCart = await removeProductFromCart(productId);
        setCartProducts(updateCart.cartProducts);
    };
    const handleAddToCart = async(productId: string) => {
        if((!productId) || (productId === '')) {
            return;
        }
       const product = await getProduct(productId);
        setCartProducts([...cartProducts, product]);
        
    };

    const fetchProducts = async (): Promise<void> => {
        const initialProducts = await getProducts();
        setProducts(initialProducts);
    };
    const fetchCartProducts = async (): Promise<void> => {
        const initialCartProducts = await getCartProducts();
        setCartProducts(initialCartProducts);
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
        if (productId && productToDisplay[productId]) {
            setProduct(productToDisplay[productId]);
        }
    }, [matchProductPage]);

    return (
        <>
            <Header onSubmit={onSubmit} cartCount={cartCount} />
            <Routes>
                <Route path="/" element={<ProductList products={products} />} />
                <Route
                    path="/product/:id"
                    element={<Product product={product} addToCart={() => handleAddToCart(product?.id ?? '')} />}
                />
                <Route
                    path="/cart"
                    element={
                        <CartProductList
                            cartProducts={cartProducts}
                            removeFromCart={handleRemoveFromCart}
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
