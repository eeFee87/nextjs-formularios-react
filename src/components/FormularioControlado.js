'use client'
import { useState } from "react";

export function FormularioControlado(props) {
  const [emailAddress, setEmailAddress] = useState('');

  const handleChange = (e) => {
    setEmailAddress(e.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor="email">Introduce tu dirección de email:</label>
        <input
          value={emailAddress}
          onChange={handleChange}
          type="text"
          id="email"
        />
      </form>
      <p>Tu dirección de email es: {emailAddress}</p>
    </>
  );
}
