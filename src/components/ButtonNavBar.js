import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonNavBar = (props) => {
  return (
      <NavLink to={props.btnPath}>{props.buttonTittle}</NavLink>
  )
}

export default ButtonNavBar