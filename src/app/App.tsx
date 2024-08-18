import { useEffect, FC } from 'react';
import { Header } from '../components/Header';
import { AppRouter } from './router/Router';
import { Footer } from '../components/Footer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';

export interface AppProps { }

export const App: FC<AppProps> = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && window.location.pathname !== '/auth') {
      navigate('/auth')
    }
  }, [isAuth, navigate]);

  return (
    <>
      {isAuth && <Header />}
      <AppRouter />
      <Footer />
    </>
  );
}