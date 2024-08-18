import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Currency } from '../../components/NavBar/NavBar';

export interface ICoinStat {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  market_data: {
    current_price: {
        [key: string]: number;
      }
  }
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi?: {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
}

export interface IHistoricalData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
  endpoints: (builder) => ({
    getCoinsMarkets: builder.query<ICoinStat[], Currency>({
      query: (currency) => `coins/markets?vs_currency=${currency}`
    }),
    getCoinById: builder.query<ICoinStat, string>({
      query: (coinId) => `coins/${coinId}`
    }),
    getHistoricalData: builder.query<IHistoricalData, { coinId: string; days: number; currency: Currency }>({
      query: ({ coinId, days, currency }) => `coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`
    })
  })
})

export const { useGetCoinsMarketsQuery, useGetCoinByIdQuery, useGetHistoricalDataQuery } = cryptoApi;