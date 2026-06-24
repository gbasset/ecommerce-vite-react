import Header from 'common/layout/Header/Header';
import ProductList from 'features/product/list-product/ProductList';
import { Product } from 'features/product/list-product/types/types';
function App() {
    const handleSubmit = (search: string) => {
        console.log(search);
    };
    const cartCount = 3;
    const products: Product[] = [{
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
        name: 'Product 4',
        price: 400,
        picture: '',
    },
    {
        id: '5',
        name: 'Product 5',
        price: 500,
        picture: '',
    },
];
    return (<>
    
            <Header onSubmit={handleSubmit} cartCount={cartCount} />
                <ProductList products={products} />
    </>
    );
}

export default App;
