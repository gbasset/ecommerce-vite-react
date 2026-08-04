import { ReactElement, ReactNode, useReducer } from 'react';
import { reducer } from '../reducer';
import { initialState } from '../states/initialState';
import { StateContext } from '../../context/StateContext';
import { DispatchContext } from '../../context/DispatchContext';

const StoreContextProvider = ({
    children,
    }: { children: ReactNode }): ReactElement => {
        const [state, dispatch] = useReducer(reducer, initialState);
return (
    <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
        {children}
    </DispatchContext.Provider>
    </StateContext.Provider>
    );
    }
export default StoreContextProvider;