import { AddCartButton } from './features/cart/add-cart-product/ui/AddCartButton/AddCartButton.tsx';

function App() {
    const addToCart = (): void => {
        console.log('call API pour ajouter le produit au panier côté serveur');
    };
    return (
        <>
            <AddCartButton addToCart={addToCart} />
        </>
    );
}

export default App;
