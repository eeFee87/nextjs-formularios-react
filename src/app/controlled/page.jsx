import { FormularioControlado } from "@/components/FormularioControlado"
import styles from "./controlled.module.css";

export default function page() {
  return (
   <main className={styles.main}>
    <h1>Formularios controlados</h1>
    <h3>Simplemente agregar el atributo value hace que React "controle" la input.</h3>
    <h5>Actualización de una input controlada</h5>

<p>A menos que nuestro objetivo sea crear una entrada que no se pueda editar, una input controlada también debe tener un atributo event listener y una función event handler. A pesar de que el state interno del elemento de input en el código anterior no cambia cuando lo escribe, todavía activa un evento change con cada pulsación de tecla.</p>
<p>Con el detector de eventos onChange, podemos detectar este evento y usar la propiedad target.value del objeto Event para actualizar la propiedad state, que luego se puede asignar al atributo value de la input.</p>
    <FormularioControlado/>
   </main>
  )
}
