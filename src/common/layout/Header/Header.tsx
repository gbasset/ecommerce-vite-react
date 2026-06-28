import { CartCount } from 'features/cart/display-cart-count/ui/CartCount/CartCount';
import { ProductSearch } from 'features/product/search-product/ui/ProductSearch/ProductSearch';
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    onSubmit: (search: string) => void;
    cartCount: number;
};
function Header ({ onSubmit, cartCount }: Props): ReactElement {
    return (
        <header className="bg-primary flex flex-col p-4 lg:flex-row lg:items-center lg:gap-4">
            <div className="flex items-center justify-between w-full mb-8 lg:mb-0 lg:contents">
                <Link to="/" className="text-white font-bold ml-4 lg:order-1 lg:shrink-0">
                    Tech shop
                </Link>
                <Link to="/cart" className="lg:order-3 lg:shrink-0">
                    <CartCount cartCount={cartCount} />
                </Link>
            </div>
            <div className="flex justify-center w-full lg:order-2 lg:flex-1">
                <ProductSearch onSubmit={onSubmit} />
            </div>
        </header>
    );
}
export default Header;
