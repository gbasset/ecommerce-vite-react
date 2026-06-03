import type { ReactElement } from 'react';

export const ProductSearch = (): ReactElement => {
    return <form>
        <input 
            type="text" 
            id="product-search"
            name="product-search"
            placeholder="Rechercher un produit" 
            aria-label="Rechercher un produit"
        />
    </form>;
};