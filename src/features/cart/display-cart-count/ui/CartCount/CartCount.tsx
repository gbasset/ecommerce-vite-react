import type { ReactElement } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
type Props = {
    cartCount: number;
};
export const CartCount = ({ cartCount }: Props): ReactElement => {
    return (
        <Badge badgeContent={cartCount} color={'error'}>
            <ShoppingCart color={'primary'} />
        </Badge>
    );
};
