/* eslint-disable import/prefer-default-export */
import React from 'react';
import '../../assets/styles/CarouselItem.scss';

export const CarouselItem = () => {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src='public/assets/play-icon.png' alt='Play Icon' />
          <img className='carousel-item__details--img' src='public/assets/plus-icon.png' alt='Plus Icon' />
        </div>
        <p className='carousel-item__details--title'>Título descriptivo</p>
        <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
      </div>
    </div>
  );
};
