import React from 'react'
import './input.scss'
import PropTypes from 'prop-types'

function Input({name, type, _handlerInput, disabled}) {
  return (
    <input 
      type={type} 
      name={name}
      disabled={disabled}
      onChange={(e)=>_handlerInput(e)} 
    />
    )
}

Input.propTypes = {
  _handlerInput: PropTypes.func.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
}

export default Input;
