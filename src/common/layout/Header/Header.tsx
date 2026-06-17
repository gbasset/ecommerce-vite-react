import { CartCount } from 'features/cart/display-cart-count/ui/CartCount/CartCount';
import { ProductSearch } from 'features/product/search-product/ui/ProductSearch/ProductSearch';
import type { ReactElement } from 'react';

type Props = {
    onSubmit: (search: string) => void;
    cartCount: number;
};
function Header ({ onSubmit, cartCount }: Props): ReactElement {
    return <header className="bg-primary flex  flex-col justify-center p-4 lg:flex-row-reverse lg:items-center">
        <div className='flex justify-center'>
            <CartCount cartCount={cartCount} />
        </div>
        <div className='flex justify-center w-full lg:w-10/12'>
            <ProductSearch onSubmit={onSubmit} />
        </div>
    </header>;
};
export default Header;