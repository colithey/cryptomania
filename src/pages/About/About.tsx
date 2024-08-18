import { type FC } from 'react'
import style from './About.module.scss'

export interface AboutProps {}

const About: FC<AboutProps> = () => {
    return (
        <section className={style.about}>
            <div className={`${style.container} container`}>
                <h2 className={style.title}>Real-Time Crypto Prices & Expert Analysis</h2>
                <p className={style.intro}>
                    <strong>Welcome to Cryptomania</strong>, your trusted source for real-time cryptocurrency prices and expert market analysis. In the ever-evolving world of digital assets, staying informed is key to making smart investment decisions. Cryptomania was created with the mission to empower traders, investors, and enthusiasts with accurate, timely, and comprehensive information that can make all the difference in your trading strategy.
                </p>
                
                <h3 className={style.subtitle}>Why Choose Cryptomania?</h3>
                <p>
                    At Cryptomania, we understand that the cryptocurrency market never sleeps. Prices fluctuate rapidly, new coins and tokens emerge, and market sentiment can shift in an instant. That's why our platform is designed to deliver real-time data, ensuring you have the most current prices at your fingertips. Whether you're tracking Bitcoin, Ethereum, or the latest altcoins, our platform provides instant access to live pricing, market capitalization, trading volumes, and more.
                </p>
                
                <h3 className={style.subtitle}>In-Depth Market Analysis</h3>
                <p>
                    Beyond just numbers, Cryptomania offers in-depth market analysis from industry experts. Our team of seasoned analysts dives deep into market trends, offering insights that go beyond the headlines. We break down complex data into actionable intelligence, helping you to anticipate market movements and make informed decisions. From technical analysis to market forecasts, our expert opinions are grounded in data and experience, giving you a competitive edge in the fast-paced crypto landscape.
                </p>
                
                <h3 className={style.subtitle}>A Comprehensive Toolkit for Every Trader</h3>
                <p>
                    Whether you are a beginner taking your first steps into cryptocurrency trading or an experienced trader looking to refine your strategy, Cryptomania provides a toolkit tailored to your needs. Our platform offers customizable charts, technical indicators, and real-time news feeds that keep you connected to the latest developments in the crypto world. We believe in empowering our users with the tools they need to succeed, all in one place.
                </p>
                
                <h3 className={style.subtitle}>Community and Education</h3>
                <p>
                    At Cryptomania, we are more than just a platform; we are a community of like-minded individuals who share a passion for the future of digital finance. We offer a range of educational resources, from beginner guides to advanced trading strategies, ensuring that you can continue to grow and evolve in your trading journey. Join our community to connect with other traders, share insights, and stay ahead of the curve.
                </p>
                
                <h3 className={style.subtitle}>Security and Trust</h3>
                <p>
                    Your security is our top priority. Cryptomania employs advanced security measures to protect your data and ensure a safe trading experience. We are committed to transparency and trust, providing you with accurate information free from bias. Our platform is designed to be user-friendly and accessible, giving you confidence in every trade you make.
                </p>
                
                <h2 className={style.title}>Stay Ahead with Cryptomania</h2>
                <p>
                    In the world of cryptocurrency, timing is everything. Cryptomania is here to keep you informed, educated, and ahead of the market. Whether you are monitoring your portfolio, looking for the next big opportunity, or seeking expert guidance, Cryptomania is your go-to resource for everything crypto.
                </p>
                
                <p className={style.cta}>
                    <strong>Join us today</strong> and take control of your financial future with Cryptomania—where real-time data meets expert analysis.
                </p>
            </div>
        </section>
    );
}

export default About;