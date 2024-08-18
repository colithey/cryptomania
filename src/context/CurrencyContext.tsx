import { createContext, useContext, useState, FC, ReactNode } from 'react';
import { Currency } from '../components/NavBar/NavBar';

interface CurrencyContextProps {
    selectedCurrency: Currency;
    setSelectedCurrency: (currency: Currency) => void
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(undefined)

export const useCurrency = () => {
    const context = useContext(CurrencyContext)
    if (!context) {
        throw new Error('useCurrency must be used within a CurrencyProvider')
    }
    return context
}

interface CurrencyProviderProps {
    children: ReactNode;
}

export const CurrencyProvider: FC<CurrencyProviderProps> = ({ children }) => {
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>(Currency.USD)

    return (
        <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
            {children}
        </CurrencyContext.Provider>
    )
}