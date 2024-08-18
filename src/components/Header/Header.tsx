import { type FC } from 'react'
import style from './Header.module.scss'
import { NavBar } from '../NavBar';
import headerLogo from '../../assets/images/crypto-logo.svg'
import { Link } from 'react-router-dom';

export interface HeaderProps { }

export const Header: FC<HeaderProps> = () => {
    return (
        <div className={style.header}>
            <div className={`${style.container} container`}>
                    <Link to='/' className={style.logo_box}>
                        <img className={style.logo_img} src={headerLogo} alt="logo" />
                        <span className={style.logo_text}>cryptomania</span>
                    </Link>
                    <NavBar />
            </div>
        </div>
    );
}