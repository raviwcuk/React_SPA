import React from 'react'
import './input.scss'

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

export default Input;
