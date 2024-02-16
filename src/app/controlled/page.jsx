import Link from 'next/link';
import { ControlledInput } from '@/components/ControlledInput.jsx';
import { ControlledForm } from '@/components/ControlledForm.jsx';
import styles from './controlled.module.css';

export default function page() {
  return (
    <main className={styles.main}>
      <Link
        className={styles.link}
        href='/'
      >
        Inicio
      </Link>
      <h1>- Formularios controlados -</h1>
      <h3>
        Simplemente agregar el atributo value hace que React "controle" la
        input.
      </h3>
      <ControlledInput />
      <hr />
      <ControlledForm />
      <Link
        className={styles.link}
        href='/'
      >
        {' '}
        Volver atrás
      </Link>
    </main>
  );
}
