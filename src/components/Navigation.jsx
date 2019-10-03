import React from 'react';
import FindButton from './FindButton';

export default function Navigation(props) {
  return (
      <div>
        <h2>Security</h2>
        <hr/>
        <h3>Find Services Near You</h3>
        <button onClick={props.findButtonClick}>Find</button> <br/>
        <button>up</button>
        <button>down</button>
      </div>
  )
};