import styles from "./page.module.css";
import { FormularioControlado } from "../components/FormularioControlado.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Hello world</div>
      <FormularioControlado/>
    </main>
  );
}
