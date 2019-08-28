/* eslint-disable import/prefer-default-export */
import React from 'react';
import '../../assets/styles/Carousel.scss';

export const Carousel = ({ children }) => {
  return (
    <section className='carousel'>
      <div className='carousel__container'>
        {children}
      </div>
    </section>
  );
};

