import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'Karma Coin'
export default function Layout({children}){
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.JPG"></link>
                <meta
                    name = "description"
                    content = "More good you do, more you get back"
                />
                <title>{siteTitle}</title>
            </Head>
            <header>
                <h1>Karma Coin</h1>
                <h4>More good you do, more you get back</h4>
                <br/>
                <h6>Send $1 to one of these charity addresses to get 1 karma coin. Send $10 to get 10 karma. Send 1M to get 1M karma.</h6>
                <p>Charity For Children: mjyuolwesdtghncv1q78ht9qr3kop0mzxcvbnmqrt</p>
                <p>Charity for Senior Citizens: t2uah7dc35naolq0nc7zytedjkl71qutc3408oqted</p>
                <p>Charity for Animals: ew12utnmcx23opqatf9rbe7xnsw2et4bvhj09qwwjtcd</p>
                <p>Charity for Rural Development: tyuromabwoldhqazxt120mw8y6i7lb4c3x2sre5ol3</p>
                <p>Charity for Web3 hacks: qwpo098uynb56vcder342klas89yt4nbcz3xa2vc0</p>
            </header>
        </div>
    )
}