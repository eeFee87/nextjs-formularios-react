'use client';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function ControlledInput(props) {
  const [emailAddress, setEmailAddress] = useState('');
  const handleChange = (e) => {
    setEmailAddress(e.target.value);
  };
  const ejemplo1 = `<form>
        <label htmlFor="email">Introduce tu dirección de email:</label>
        <input
          value={emailAddress}
          onChange={handleChange}
          type="text"
          id="email"
        />
      </form>
      <p>Tu dirección de email es: {emailAddress}</p> 
    </>`;

  return (
    <article>
      <h3>Actualización de una input controlada</h3>

      <p>
        A menos que nuestro objetivo sea crear una entrada que no se pueda
        editar, una input controlada también debe tener un atributo event
        listener y una función event handler. A pesar de que el state interno
        del elemento de input en el código anterior no cambia cuando lo escribe,
        todavía activa un evento change con cada pulsación de tecla.
      </p>
      <p>
        Con el detector de eventos onChange, podemos detectar este evento y usar
        la propiedad target.value del objeto Event para actualizar la propiedad
        state, que luego se puede asignar al atributo value de la input.
      </p>
      <h3>Ejemplo 1:</h3>
      <SyntaxHighlighter
        language='javascript'
        style={atomOneDark}
      >
        {ejemplo1}
      </SyntaxHighlighter>
      <form>
        <label htmlFor='email'>Introduce tu dirección de email:</label>
        <input
          value={emailAddress}
          onChange={handleChange}
          type='text'
          id='email'
        />
      </form>
      <p>
        Tu dirección de email es: <span className='email'>{emailAddress}</span>{' '}
      </p>
    </article>
  );
}
