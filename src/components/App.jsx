import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './Header';
import Body from './Body';

import Routes from '../Routes';

export default function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
};
