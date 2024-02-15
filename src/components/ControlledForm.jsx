'use client';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function ControlledForm() {
  const [formState, setFormState] = useState({ username: '', email: '' });
  function handleInputChange({ target }) {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  }
  const ejemplo2 = `
    

import { useState } from 'react';

export default function FormControlled() {
  const [formState, setFormState] = useState({ username: '', email: '' });

  // Desestructuramos el target del event
  // Esta función nos permite hacer el cambio en cualquier input
  const handleInputChange = ({ target }) => {
    // De target nos interesa dos valores: name (necesario declararlo en los inputs del formulario) y value
    const { name, value } = target;
    // Agregamos o modificamos la propiedad name con su valor en el formState actual
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <h1>Simple form</h1>
      <input
        type="text"
        placeholder="Introduce tu nombre"
        // el valor del atributo name debe coincidir con una propiedad del objeto
        name="username"
        // el valor actual para la propiedad correspondiente en el state
        value={formState.username}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="email"
        placeholder="Introduce tu email"
        name="email"
        value={formState.email}
        onChange={handleInputChange}
      />
      <hr />
      <p>
        Valor del campo <em>name</em> en <code>formState</code>:{' '}
        {formState.username}
      </p>
      <p>
        Valor del campo <em>email</em> en <code>formState</code>:{' '}
        {formState.email}
      </p>
    </>
  );
}
    `;
  return (
    <article>
      <h2>Almacenar datos de formulario en el state como un objeto</h2>
      <p>
        Para optimizar el código, en vez de tener una variable de estado para
        cada campo de un formulario, podemos crear una variable de estado como
        un objeto que integre todos los valores de los campos del formulario
        como propiedades y por medio de una misma función handle, podamos
        modificar cualquier campo del objeto del state del formulario. Véase el
        siguiente código:
      </p>
      <h3>Ejemplo 2</h3>
      <SyntaxHighlighter
        language='javascript'
        style={atomOneDark}
      >
        {ejemplo2}
      </SyntaxHighlighter>
      <form>
        <label htmlFor='username'>Nombre de usuario:</label>
        <input
          id='username'
          type='text'
          placeholder='Introduce tu nombre'
          // el valor del atributo name debe coincidir con una propiedad del objeto
          name='username'
          // el valor actual para la propiedad correspondiente en el state
          value={formState.username}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor='email2'>Email:</label>
        <input
          id='email2'
          type='email'
          placeholder='Introduce tu email'
          name='email'
          value={formState.email}
          onChange={handleInputChange}
        />
      </form>
      <p>
        Valor del campo <em>name</em> en <code>formState</code>:{' '}
        <span className='span'>{formState.username}</span>
      </p>
      <p>
        Valor del campo <em>email</em> en <code>formState</code>:{' '}
        {formState.email}
      </p>
    </article>
  );
}
