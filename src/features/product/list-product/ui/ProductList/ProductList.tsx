import {ReactElement} from 'react';
import { Product } from '../../types/types';
import { ProductItem } from '../ProductItem/ProductItem';
import { Link } from 'react-router-dom';
type Props = {
    products: Product[];
};
const ProductList = ({products}: Props): ReactElement => {
    return (
        <div className='flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center gap-2' >
        {products.map((product) => {
        const {id, ...productWithoutId} = product;
        return <Link to={`/product/${id}`} key={id}>
        <ProductItem product={productWithoutId} />
        </Link>
    })} </div>
    );
};
export default ProductList;