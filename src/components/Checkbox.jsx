import React from 'react';
import PropTypes from 'prop-types';

console.log(name)



// const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
//     <input type={type} name={name} checked={checked} onChange={onChange} />
// );

const Checkbox = (props) => (
  <>
  <label className="label" htmlFor={props.name} key={props.key}>{props.name}</label>
  <input className="checkbox" type="checkbox" name={props.name} checked={props.checked} onChange={props.onChange} />
  </>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;