import type { ReactElement } from 'react';
import {Panorama} from '@mui/icons-material';
import { Product } from '../../types/types';

type Props = {
    product: Omit<Product, 'id'>;
};
export const ProductItem = ( {product}: Props ): ReactElement => {
    const {name, price, picture } = product;
    return (
        <div className='flex flex-col items-center justify-center border-2 p-4 w-64 mt-4 bg-white rounded shadow-md' >
            <div className='w-48 h-48 >'>
           {picture && <img src={picture} alt={name} className='object-contain' />}
           {!picture && <div className='size-full bg-orange-100 flex items-center justify-center' ><Panorama  fontSize='large' color='disabled' /></div>}
           </div>
            <div className='flex flex-col items-center justify-center w-full mt-4'>
                <h3 className='text-lg font-bold text-center'>{name}</h3>
                <p className='text-lg mt-1 text-gray-500 font-semibold text-center'>{price}</p>
            </div>
        </div>
    );
};