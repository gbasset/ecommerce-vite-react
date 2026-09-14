import { CartCount } from 'features/cart/display-cart-count/ui/CartCount/CartCount';
import { ProductSearch } from 'features/product/search-product/ui/ProductSearch/ProductSearch';
import { StateContext } from '../../../context/StateContext';
import { useContext, type ReactElement } from 'react';
import { Link } from 'react-router-dom';

function Header (): ReactElement {
    const state = useContext(StateContext);
    if (state === null) {
        throw new Error('Header must be used within StoreContextProvider');
    }
    return (
        <header className="bg-primary flex flex-col p-4 lg:flex-row lg:items-center lg:gap-4">
            <div className="flex items-center justify-between w-full mb-8 lg:mb-0 lg:contents">
                <Link to="/" className="text-white font-bold ml-4 lg:order-1 lg:shrink-0">
                    Tech shop
                </Link>
                <Link to="/cart" className="lg:order-3 lg:shrink-0">
                    <CartCount />
                </Link>
            </div>
            <div className="flex justify-center w-full lg:order-2 lg:flex-1">
                <ProductSearch />
            </div>
        </header>
    );
}
export default Header;
