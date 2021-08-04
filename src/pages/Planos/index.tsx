import React from 'react';
import Footer03 from '../../components/Footer03';
import NavBar from '../../components/Navbar';
import styles from './styles.module.css';
import Link from 'next/link'

function Planos() {
    return(
        <div className={styles.planosContainer}>
            <NavBar />
            <header>
                <h1>Planos e Preços</h1>
                <p>Confira a vantagem de fazer parte da Lara! E comece a usar agora mesmo</p>
            </header>

            <section className={styles.planos}>
                <div className={styles.cardGroup}>
                    <div className={styles.card}>
                        <h1>Starter</h1>
                        <img src="./star.svg" alt="Starter" />
                        <p>Tenha sua empresa preparada com o essencial</p>
                        <Link href="#">
                            <a>Comece de graça</a>
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <h1>Colher</h1>
                        <img src="./colher.svg" alt="Colher" />
                        <p>Para as empresas que possuem um processo simples.</p>
                        <Link href="#">
                            <a>Comece de graça</a>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.Perguntas}>

            </section>

            <section>

            </section>

            <Footer03 />
        </div>
    );
}

export default Planos;