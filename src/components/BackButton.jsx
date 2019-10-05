import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function BackButton(props) {
  return (
      <div className="back-btn-position">
        <button class="find-btn button button--aylen  button--inverted button--text-upper button--size-l" onClick={props.backButtonClick}><FontAwesomeIcon icon={faArrowAltCircleLeft} size="md"/> Home</button> 
      </div>
  )
};