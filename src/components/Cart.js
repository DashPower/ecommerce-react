import React,{useState} from 'react'

const Cart = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [usuario, setUsuarios] = useState([])
  
  const handleClick = (e)=>{
    let copia= [...usuario]
    const usuario ={
      nombre:nombre,
      email:email
    }
    copia.push(usuario)
    setUsuarios()

  }
  const handleChangeName = (e)=>{


  }
  const handleChangeEmail= (e)=>{


  }

  
  
  return (
    
    <>

    </>
  )
}

export default Cart