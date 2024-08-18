import { useState, FC, useRef } from 'react';
import style from './Search.module.scss';
import { useCurrency } from '../../context/CurrencyContext';
import { useGetCoinsMarketsQuery } from '../../api/crypto/cryptoApi';
import { CryptoTable } from '../CryptoTable';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface ICoin {
    id: string;
    name: string;
    symbol: string;
    image: {
        thumb: string;
        small: string;
        large: string;
      };
    current_price: number;
    market_cap_rank: number;
    price_change_percentage_24h: number;
    market_cap: number;
}

export interface SearchProps {}

export const Search: FC<SearchProps> = () => {

    const targerRef = useRef(null)

    const { selectedCurrency } = useCurrency()
    const { data, error, isLoading } = useGetCoinsMarketsQuery(selectedCurrency)

    const [input, setInput] = useState('')
    const [filteredCoins, setFilteredCoins] = useState<ICoin[]>([])

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        if ( e.target.value === '' ) {
            setFilteredCoins(data || [])
        }
    }

    const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (data) {
            const filteredData = data.filter((coin: ICoin) =>
                coin.name.toLowerCase().includes(input.toLowerCase())
            )
            setFilteredCoins(filteredData)
        }
    }

    const getErrorMessage = (error: string | FetchBaseQueryError | SerializedError | undefined): string | null => {
        if (typeof error === 'string') {
            return error
        } else if (error && 'status' in error) {
            return `Error: ${error.status}`
        } else if (error && 'message' in error) {
            return error.message || null
        }
        return null
    };

    const errorMessage = getErrorMessage(error) || null

    return (
        <>
            <div className={style.search} ref={targerRef}>
                <form onSubmit={searchHandler}>
                    <input
                        onChange={inputHandler}
                        value={input}
                        list='coinList'
                        type="text"
                        placeholder='Search crypto...'
                        required
                    />
                    <datalist id='coinList'>
                        {data?.map((coin, idx) => (<option key={idx} value={coin.name}></option>))}
                    </datalist>
                    <button type='submit'>Search</button>
                </form>
            </div>
            {filteredCoins.length === 0 && input !== '' && (
                <div style={{fontFamily: 'Lexend', textAlign: 'center', color: 'red', marginBottom: '20px'}} className={style.noResults}>No results found</div>
            )}
            <CryptoTable
                data={filteredCoins.length > 0 ? filteredCoins : data}
                isLoading={isLoading}
                error={errorMessage}
                selectedCurrency={selectedCurrency || 'USD'}
            />
        </>
    );
};
