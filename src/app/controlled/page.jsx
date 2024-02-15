import { ControlledInput } from '@/components/ControlledInput.jsx';
import { ControlledForm } from '@/components/ControlledForm.jsx';
import styles from './controlled.module.css';

export default function page() {
  return (
    <main className={styles.main}>
      <h1>- Formularios controlados -</h1>
      <h3>
        Simplemente agregar el atributo value hace que React "controle" la
        input.
      </h3>
      <ControlledInput />
      <hr />
      <ControlledForm />
    </main>
  );
}
