/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Header } from '../components/layout/header';
import { Search } from '../components/layout/search';
import '../assets/styles/App.scss';

export const Layout = () => {
  return (
    <div className='App'>
      <Header />
      <Search />
    </div>
  );
};
