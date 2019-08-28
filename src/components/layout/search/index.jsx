/* eslint-disable import/prefer-default-export */
import React from 'react';
import '../../../assets/styles/Search.scss';

export const Search = () => {
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className='input' placeholder='Buscar...' />
    </section>
  );
};
