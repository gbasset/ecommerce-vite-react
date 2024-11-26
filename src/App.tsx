import { CartCount } from './features/cart/display-cart-count/ui/CartCount/CartCount.tsx';

function App() {
    return (
        <div className={'mt-3 '}>
            <CartCount cartCount={8}></CartCount>
        </div>
    );
}

export default App;
