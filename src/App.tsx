
import { ProductSearch } from './features/product/search-product/ui/ProductSearch/ProductSearch.tsx';
function App() {
    const handleSubmit = (search: string) => {
        console.log(search);
    };
    return (
        <div className={'mt-3'}>
            <ProductSearch onSubmit={handleSubmit} />
        </div>
    );
}

export default App;
