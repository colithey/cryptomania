import { type FC } from 'react'
import style from './NavBar.module.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { PagesEnum } from '../../app/router/Router';
import { useCurrency } from '../../context/CurrencyContext'
import { useDispatch } from 'react-redux';
import { logout } from '../../api/auth/authSlice';

export interface NavBarProps { }

export enum Currency {
    EUR = "eur",
    USD = "usd",
    RUB = "rub"
}

export const NavBar: FC<NavBarProps> = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { selectedCurrency, setSelectedCurrency } = useCurrency()

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCurrency(event.target.value as Currency)
    }

    const handleLogout = () => {
        console.log('Logging OUt')
        
        dispatch(logout());
        navigate("/auth");
      };

    return (
        <>
            <nav className={style.nav}>
                <div className={style.nav_left}>
                    <NavLink to={PagesEnum.HOME} className={style.link}>
                        Home
                    </NavLink>
                    <NavLink to={PagesEnum.ABOUT} className={style.link}>
                        About
                    </NavLink>
                    <NavLink to={PagesEnum.SERVICES} className={style.link}>
                        Services
                    </NavLink>
                    <NavLink to={PagesEnum.CONTACT} className={style.link}>
                        Contact
                    </NavLink>
                </div>
                <div className={style.nav_right}>
                    <select value={selectedCurrency} onChange={handleCurrencyChange}>
                        <option value={Currency.EUR}>{Currency.EUR.toUpperCase()}</option>
                        <option value={Currency.USD}>{Currency.USD.toUpperCase()}</option>
                        <option value={Currency.RUB}>{Currency.RUB.toUpperCase()}</option>
                    </select>
                    <Link to='/auth' className={style.button_box}>
                        <button 
                            className={style.button}
                            onClick={handleLogout}
                        >Log Out</button>
                    </Link>
                </div>
            </nav>
        </>
    );
}