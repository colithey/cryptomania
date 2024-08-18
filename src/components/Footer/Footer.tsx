import { type FC } from 'react'
import style from './Footer.module.scss'
import footerLogo from '../../assets/images/crypto-logo.svg'

export interface FooterProps { }

export const Footer: FC<FooterProps> = () => {
    return (
        <>
            <footer className={style.footer}>
                <img src={footerLogo} alt="" />
                <p>© 2024 Cryptomania. All Rights Reserved.</p>
            </footer>
        </>
    );
}