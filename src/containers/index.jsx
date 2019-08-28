/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Header } from '../components/header';
import { Search } from '../components/search';
import { Carousel } from '../components/carousel';
import { CarouselItem } from '../components/carouselItem';
import { Category } from '../components/category';

import '../assets/styles/App.scss';

export const Layout = () => {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Category title='Mi Lista'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Category>

    </div>
  );
};
