import React from 'react'
import './button.scss'
import PropTypes from 'prop-types'

function Button({className, text, _clicked, disabled}) {
  return (
    <button 
      className={`animated flipInY ${className}`}
      onClick={(e)=>_clicked(e)}
      disabled={disabled}
    >{text}</button>
    )
}

Button.propTypes = {
  _clicked: PropTypes.func.isRequired,
  className: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool
}

export default Button;
