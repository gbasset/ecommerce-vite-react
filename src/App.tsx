import Header from 'common/layout/Header/Header';
import Product from 'features/product/display-product/ui/Product/Product';
import { ProductData } from 'features/product/display-product/types/types';
function App() {
    const handleSubmit = (search: string) => {
        console.log(search);
    };
    const cartCount = 3;
    const products: ProductData = {
        name: 'Product 1',
        price: 100,
        picture: '',
        description: 'Description of the product',
    };
    return (<>
    
            <Header onSubmit={handleSubmit} cartCount={cartCount} />
            <div className='m-5'>
                <Product product={products} addToCart={() => console.log('add to cart')} />
            </div>
    </>
    );
}

export default App;
