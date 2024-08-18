import { useRef, type FC } from 'react'
import style from './Home.module.scss'
import aboutImg from '../../assets/images/about-img.png'
import { Search } from '../../components/Search';

export interface HomeProps { }

const Home: FC<HomeProps> = () => {

    const searchRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (searchRef.current) {
            searchRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <section className={style.about}>
            <div className={`${style.container} container`}>
                <div className={style.info}>
                    <div className={style.text}>
                        <h1 className={style.title}>Real-Time Crypto Prices & Expert Analysis</h1>
                        <h2 className={style.subtitle}>Stay informed with up-to-the-minute cryptocurrency prices and in-depth market analysis. Our platform offers real-time data and expert insights to help you make smarter trading decisions in the fast-paced world of digital assets.</h2>
                        <div className={style.button_container}>
                            <button className={style.scroll_button} onClick={handleScroll}><span>to scroll</span></button>
                        </div>
                    </div>
                    <div className={style.image}>
                        <img src={aboutImg} alt="photo" />
                    </div>
                </div>
                <div ref={searchRef}>
                    <Search />
                </div>
                <br />
            </div>
        </section>

    );
}

export default Home;