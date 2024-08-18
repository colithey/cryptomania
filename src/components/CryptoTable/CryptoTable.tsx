import { FC } from 'react';
import style from './CryptoTable.module.scss';
import { currencySymbols } from '../../constants/currencySymbols';
import { Link } from 'react-router-dom';

export interface CryptoTableProps {
    data?: any[];
    isLoading: boolean;
    error: string | null;
    selectedCurrency: string;
}

export const CryptoTable: FC<CryptoTableProps> = ({ data, error, isLoading, selectedCurrency }) => {

    const currencySymbol = selectedCurrency ? currencySymbols[selectedCurrency.toUpperCase()] || selectedCurrency : ''

    if (isLoading) {
        return (
            <div className={style.loading}>
                <div className={style.load}></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className={style.error_container}>
                <div className={style.error_message}>
                    <p>{error}</p>
                </div>
            </div>
        )
    }

    if (data) {
        return (
            <div className={style.crypto_table}>
                <div className={style.table_layout}>
                    <p>№</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p style={{ textAlign: 'center' }}>24H Change</p>
                    <p className={style.market_cap}>Market Cap</p>
                </div>
                {data?.slice(0, 15).map((coin: any) => (
                    <Link to={`/coin/${coin.id}`} key={coin.id} className={style.table_layout}>
                        <p>{coin.market_cap_rank}</p>
                        <div>
                            <img src={coin.image} alt="" />
                            <p>{coin.name + ' - ' + coin.symbol.toUpperCase()}</p>
                        </div>
                        <p>
                            {coin.current_price} {currencySymbol}
                        </p>
                        <p className={`${coin.price_change_percentage_24h > 0 ? style.green : style.red}`} style={{ textAlign: 'center' }}>
                            {Math.floor(coin.price_change_percentage_24h * 100) / 100}%
                        </p>
                        <p className={style.market_cap}>
                            {coin.market_cap} {currencySymbol}
                        </p>
                    </Link>
                ))}
            </div>
        )
    } else {
        return (
            <div className={style.loading}>
                <div className={style.load}></div>
            </div>
        )
    }
};
