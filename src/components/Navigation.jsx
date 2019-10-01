import React from 'react';
import FindButton from './FindButton';

export default function Navigation() {
  return (
      <div>
        <h2>Security</h2>
        <hr/>
        <h3>Find Services Near You</h3>
        <FindButton/>
        <button>up</button>
        <button>down</button>
      </div>
  )
};