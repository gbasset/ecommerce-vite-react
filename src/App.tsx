import Header from 'common/layout/Header/Header';

import { CartProductItem } from 'features/cart/list-cart-products/ui/CartProductItem';
import { CartProductItemData } from 'features/cart/list-cart-products/types';
function App() {
    const handleSubmit = (search: string) => {
        console.log(search);
    };
    const handleRemoveFromCart = () => {
        console.log('remove from cart');
    };
    const cartCount = 3;
    const products: CartProductItemData = {
        name: 'Product 1',
        price: 100,
        picture: '',
        id: '1',
    };

    return (<>
    
            <Header onSubmit={handleSubmit} cartCount={cartCount} />
            <div className='m-5'>
                <CartProductItem cartProduct={products} removeFromCart={handleRemoveFromCart} />
            </div>
    </>
    );
}

export default App;
