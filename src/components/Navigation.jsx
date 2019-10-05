import React from 'react';

export default function Navigation(props) {
  return (
      <div className="navigation container-fluid">
        <h2>Security</h2>
        <hr/>
        <h3>Companies</h3>
        <button className="find-btn button button--aylen button--border-thick button--inverted button--text-upper button--size-s" onClick={props.findButtonClick}>Find</button> <br/>
        <div className="nav-buttons">
        <button className="up button button--aylen button--border-thick button--inverted button--text-upper button--size-s">Next</button>
        <button className="down button button--aylen button--border-thick button--inverted button--text-upper button--size-s">Back</button>
        </div>
      </div>
  )
};