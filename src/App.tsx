import Header from 'common/layout/Header/Header';

import { CartProductItemData } from 'features/cart/list-cart-products/types';
import { CartProductList } from 'features/cart/list-cart-products/ui';
function App() {
    const handleSubmit = (search: string) => {
        console.log(search);
    };
    const handleRemoveFromCart = () => {
        console.log('remove from cart');
    };
    const cartCount = 3;
    const products: CartProductItemData[] = [
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
];
    return (<>
    
            <Header onSubmit={handleSubmit} cartCount={cartCount} />
            <div className='m-5'>
                <CartProductList cartProducts={products} removeFromCart={handleRemoveFromCart} />
            </div>
    </>
    );
}

export default App;
