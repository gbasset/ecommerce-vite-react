import { useState } from 'react';
import Header from 'common/layout/Header/Header';

import { CartProductItemData } from 'features/cart/list-cart-products/types';
import { CartProductList } from 'features/cart/list-cart-products/ui';
import Product from 'features/product/display-product/ui/Product/Product';
import ProductList from 'features/product/list-product';
import type { Product as ListProduct } from 'features/product/list-product/types/types';
import type { ProductData } from 'features/product/display-product/types/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    const [products, setProducts] = useState<ListProduct[]>([
        {
            id: '1',
            name: 'Product 1',
            price: 100,
            picture: '',
        },
    {
        id: '2',
        name: 'Product 2',
        price: 200,
        picture: '',
    }, 
    {
        id: '3',
        name: 'Product 3',
        price: 300,
        picture: '',
    },
    {
        id: '4',
        name: 'Iphone 15',
        price: 1500,
        picture: '',
    },
    {
        id: '5',
        name: 'Iphone 16',
        price: 1600,
        picture: '',
    }
    ]);

    const [cartProducts, setCartProducts] = useState<CartProductItemData[]>( [{
        id: '1',
        name: 'Product 1',
        price: 100,
        picture: '',
    }]);
    const handleSubmit = (search: string) => {
        console.log(search);
    };
    const handleRemoveFromCart = () => {
        console.log('remove from cart');
    };
    const handleAddToCart = () => {
        console.log('add to cart');
    };

    const cartCount = 3;
    const product: ProductData = {
        name: 'Mobile phone',
        picture: ''
        ,
        price: 1000,
        description:
       " The mobile phone is a superior smartphone that offers unmatched performance and top-tier camera features. Enjoy the sleek design, powerful A15 Bionic chip, and durable Ceramic Shield front cover. It offers Dual 12MP camera system: Ultra Wide and Wide cameras, and up to 19 hours of video playback. Experience the next level of smart techn"
    };
    
    return (
         <BrowserRouter>
        <Header onSubmit={handleSubmit} cartCount={cartCount} />
        <Routes>
        <Route path="/" element={<ProductList products={products} />}
/>
            <Route
            path="/product/:id"
            element={<Product product={product} addToCart={handleAddToCart}
            />}
            />
            <Route
            path="/cart"
            element={
            <CartProductList
            cartProducts={cartProducts}
            removeFromCart={handleRemoveFromCart}
            />}

/>

        </Routes>
       
         </BrowserRouter>
    );
}
export default App;
