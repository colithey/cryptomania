import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App'
import "./assets/styles/index.scss";
import { CurrencyProvider } from './context/CurrencyContext';
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <CurrencyProvider>
            <App />
          </CurrencyProvider>
        </BrowserRouter>
    </Provider>
  </StrictMode>
)
