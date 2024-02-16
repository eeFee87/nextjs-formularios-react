import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Formularios controlados vs Formularios no controlados</h1>
      <div>
        <p>
          En React, una "input controlada" es un elemento de entrada cuyo valor
          está controlado por el estado del componente. Esto significa que el
          valor del elemento de entrada se actualiza dinámicamente a medida que
          cambia el estado del componente y, a su vez, cualquier cambio en el
          valor del elemento de entrada actualiza el estado del componente.
        </p>
        <p>
          Por otro lado, una "input no controlada" es un elemento de entrada
          cuyo valor no está controlado por el estado del componente y no se
          actualiza dinámicamente.
        </p>
      </div>
      <section className={styles.sectionLink}>
        <Link
          href='/controlled'
          className={styles.link}
        >
          Controlados
        </Link>
        <Link
          href=''
          className={styles.link}
        >
          No controlados
        </Link>
        <Link
          href=''
          className={styles.link}
        >
          React Hook Form
        </Link>
      </section>
    </main>
  );
}
