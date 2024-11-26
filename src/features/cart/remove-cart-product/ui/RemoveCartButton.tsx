import Button from 'common/design-system/Button/Button.tsx';
import { ReactElement } from 'react';
type Props = {
    removeFromCart: () => void;
};
export const RemoveCartButton = ({ removeFromCart }: Props): ReactElement => {
    return <Button onClick={removeFromCart}>Retirer du panier</Button>;
};
