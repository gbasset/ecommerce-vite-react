import { useContext } from "react"
import { DispatchContext } from "../../../../../context/DispatchContext";
import { handleSubmit } from "../../api/searchProducts";


const useOnSubmit = () => {
    const dispatch = useContext(DispatchContext)
    if (dispatch === null) {
        throw new Error('useOnSubmit must be used within the DispatchContext Provider');
    }
    const onSubmit = async (search: string): Promise<void> => {
        const filteredProducts = await handleSubmit(search);
        dispatch({
            type: 'products/filtered',
            payload: { products: filteredProducts },
        });
        };  
    return onSubmit;
}
export default useOnSubmit;