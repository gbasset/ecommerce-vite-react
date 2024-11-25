import Button from 'common/design-system/Button/Button.tsx';
import { ReactElement } from 'react';

type Props = {
    addToCart: () => void;
};
export const AddCartButton = ({ addToCart }: Props): ReactElement => {
    return (
        <Button variant={'contained'} onClick={addToCart}>
            Ajouter au panier
        </Button>
    );
};
