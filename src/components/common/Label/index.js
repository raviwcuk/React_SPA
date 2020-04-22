import React from 'react'
import './label.scss'
import PropTypes from 'prop-types'

function Label({name}) {
  return (
      <label>{name}</label>
    )
}

Label.propTypes = {
  name: PropTypes.string
}

export default Label;
