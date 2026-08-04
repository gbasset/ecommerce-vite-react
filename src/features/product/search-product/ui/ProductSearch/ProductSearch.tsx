import type { ReactElement, ChangeEvent, FormEvent } from 'react';
import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import useOnSubmit from '../../hooks/useOnSubmit/useOnSubmit';
export const ProductSearch = (): ReactElement => {
    const [search, setSearch] = useState('');
    const onSubmit = useOnSubmit();
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(search);
    };
    return <form onSubmit={handleSubmit} className='w-full flex'>
        <input 
            className='w-full'
            type="text" 
            id="product-search"
            name="product-search"
            placeholder="Rechercher un produit" 
            aria-label="Rechercher un produit"
            value={search}
            onChange={handleSearch}
        />
        <IconButton type="submit" aria-label="Rechercher un produit">
            <Search />
        </IconButton>
    </form>;
};