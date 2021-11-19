import React from 'react';

import classes from './Button.module.css';
// reuseble component buttondu kerektuu lyoboi componenttin ichine chakyra alabyz
const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
