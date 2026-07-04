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
import { productToAddToCart } from 'features/cart/add-cart-product/data/productToAddToCart';
import { allProducts } from 'features/product/list-product/data/allProducts';
function AppContent() {

    const matchProductPage = useMatch('/product/:id');
    const [products, setProducts] = useState<ListProduct[]>(allProducts);
    const [product, setProduct] = useState<ProductData>(productToDisplay['1'])
    const [cartProducts, setCartProducts] = useState<CartProductItemData[]>( [{
        id: '1',
        name: 'Product 1',
        price: 100,
        picture: '',
    }]);
    const cartCount = cartProducts.length;
    const handleSubmit = (search: string) => {
        const filteredProducts = allProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
        setProducts(filteredProducts);
    };
    const handleRemoveFromCart = (productId: CartProductItemData['id']) => {
        const productIsInCart = cartProducts.some(cartProduct => cartProduct.id === productId);
        if (productIsInCart) {
            const cartProductsWithoutProduct = cartProducts.filter(cartProduct => cartProduct.id !== productId);
            setCartProducts(cartProductsWithoutProduct);
        }

    };
    const handleAddToCart = (productId: string) => {
        const product = productToAddToCart[productId];
        const isProductInCart = cartProducts.some(cartProduct => cartProduct.id === productId);
        if (product && !isProductInCart) {
            setCartProducts([...cartProducts, product]);
        }
    };

    useEffect(() => {
        const productId = matchProductPage?.params.id;
        if (productId && productToDisplay[productId]) {
            setProduct(productToDisplay[productId]);
        }
    }, [matchProductPage]);

    return (
        <>
            <Header onSubmit={handleSubmit} cartCount={cartCount} />
            <Routes>
                <Route path="/" element={<ProductList products={products} />} />
                <Route
                    path="/product/:id"
                    element={<Product product={product} addToCart={() => handleAddToCart(product.id)} />}
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
