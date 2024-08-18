import { type FC } from 'react'
import style from './Coin.module.scss'
import { useParams } from 'react-router-dom';
import { useGetCoinByIdQuery, useGetHistoricalDataQuery } from '../../api/crypto/cryptoApi';
import { LineChart } from '../../components/LineChart';
import { useCurrency } from '../../context/CurrencyContext';
import { currencySymbols } from '../../constants/currencySymbols';

export interface CoinProps { }

const Coin: FC<CoinProps> = () => {

    const { id } = useParams<{ id: string }>()
    const { selectedCurrency } = useCurrency()
    const { data } = useGetCoinByIdQuery(id || '')
    
    const { data: historicalData, error: historicalError, isLoading: historicalLoading } = useGetHistoricalDataQuery({ 
        coinId: id || '', 
        days: 30,
        currency: selectedCurrency
    })

    if ( historicalLoading ) return <div className={style.spinner}><div className={style.spin}></div></div>;
    if ( historicalError ) return <div>Error: {historicalError?.toString()}</div>;

    const historicalDataFormatted = historicalData || { prices: [], market_caps: [], total_volumes: [] }

    const currencySymbol = currencySymbols[selectedCurrency.toUpperCase()] || selectedCurrency

    console.log('Coin Data:', data);
    console.log('Current Price:', data?.current_price);
    console.log('Currency Symbol:', currencySymbol)
    console.log('Full Coin Data:', data)

    if (data) {
        const currentPrice = data.market_data.current_price[selectedCurrency.toLowerCase()]

        if ( currentPrice !== undefined ) {
            return (
                <section className={style.coin}>
                    <div className={`${style.container} container`}>
                        <div className={style.coin_name}>
                            <img src={data.image.large} alt={data.name} />
                            <p><b>{data.name} ({data.symbol.toUpperCase()})</b></p>
                        </div>
                        <div className={style.coin_info}>
                            <ul>
                                <li>Crypto Market Rank:</li>
                                <li>#{data.market_cap_rank}</li>
                                <li>Current Price:</li>
                                <li>{currentPrice} {currencySymbol}</li>
                            </ul>
                        </div>
                        <div className={style.coin_chart}>
                            <LineChart data={historicalDataFormatted}/>
                        </div>
                    </div>
                </section>
            )
        } else {
            return <div>Price data not available for the selected currency.</div>;
        }
    } else {
        return (
            <div className={style.spinner}>
                <div className={style.spin}></div>
            </div>
        )
    }
}

export default Coin;