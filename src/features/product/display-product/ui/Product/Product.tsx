
import Panorama from '@mui/icons-material/Panorama';
import type { ProductData } from '../../types/types';
import classNames from 'classnames';
import { AddCartButton } from 'features/cart/add-cart-product/ui/AddCartButton/AddCartButton';
type Props = {
    product: ProductData;
    addToCart: () => void;
};
const borderStyle = 'border border-gray-300 border-solid rounded-lg';
export default function Product({product, addToCart}: Props) {
  return (
    <div>
        <div>
            <h1 className={'text-2xl mb-4'}>{product.name}</h1>
            <div className={classNames('flex', 'flex-col lg:flex-row', 'gap-4')}>
            <div className={classNames(borderStyle, 'p-10', 'grow',
'flex', 'justify-center')}>
                {product.picture && <img className='w-72 h-96 bg-orange-100'src={product.picture} alt={product.name} />}
                {!product.picture && <div 
                className={classNames('flex',
                'justify-center', 
                'items-center',
                 'w-72', 'h-96',
                  'bg-orange-100')} ><Panorama fontSize='large' color='disabled' /></div>}
            </div>
            <div className={classNames(borderStyle, 'p-10 pl-5', 'w-full lg:w-[25rem]', 'h-fit')}>
            <p className={'text-4xl font-bold'}> {product.price}</p>
            <div className={classNames('mt-4',)}>
                <AddCartButton addToCart={addToCart} />
            </div>
        </div>
            </div>
            
        </div>
        <div className={classNames(borderStyle, 'mt-4 p-5')}>
<h2
        className={classNames(
        'pb-2',
        'border-b border-b-gray-300 border-b-solid',
        'text-xl',
        'font-bold',
        )}
        >
        Description du produit
        </h2>
        <p className="mt-3">{product.description}</p>
        </div>
    </div>
  )
}
