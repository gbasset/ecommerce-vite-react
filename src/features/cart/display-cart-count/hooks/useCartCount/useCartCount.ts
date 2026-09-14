import { useCallback, useContext, useEffect } from 'react';

import type { StateData } from '../../../../../common/states/types';
import { DispatchContext } from '../../../../../context/DispatchContext';
import { StateContext } from '../../../../../context/StateContext';
import { getCartCount } from '../../../api/cart';

export interface UseCartCountReturn {
    cartCount: StateData['cartCount'];
}

const useCartCount = (): UseCartCountReturn => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    if (state === null) {
        throw new Error('useCartCount must be used within the StateContext Provider');
    }
    if (dispatch === null) {
        throw new Error('useCartCount must be used within the DispatchContext Provider');
    }

    const fetchCartCount = useCallback((): void => {
        const initialCartCount = getCartCount();
        dispatch({
            type: 'cartCount/fetched',
            payload: { cartCount: initialCartCount },
        });
    }, [dispatch]);

    useEffect(() => {
        fetchCartCount();
    }, [fetchCartCount]);

    return { cartCount: state.cartCount };
};

export default useCartCount;
