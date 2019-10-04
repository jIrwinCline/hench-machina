import React from 'react';

export default function Navigation(props) {
  return (
      <div className="navigation container-fluid">
        <h2>Security</h2>
        <hr/>
        <h3>Companies</h3>
        <button class="find-btn" onClick={props.findButtonClick}>Find</button> <br/>
        <div class="nav-buttons">
        <button class="up">up</button>
        <button class="down">down</button>
        </div>
      </div>
  )
};