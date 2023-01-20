import React from 'react'

const UsuarioList = ({usuarios}) => {
  return (
    <div>
      <div>{usuarios.nombre} - {usuarios.email}</div>
    </div>
  )
}

export default UsuarioList
