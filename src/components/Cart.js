import React, {useState} from 'react'
import { useCarrito } from './CustomProvider'
import CartItem from './CartItem'
import { useEffect } from 'react'

const Cart = () => {
  const {carrito,vaciarCarrito}= useCarrito()
  const [onCarrito, setOnCarrito] = useState(false)

  useEffect(()=>{ 
    if(carrito.length === 0) 
      setOnCarrito(false)//si no tiene productos
    else 
      setOnCarrito(true)//si tiene productos
    
  },[carrito])

  const totalCarrito = carrito.map(item=>item.cantidad * item.price).reduce((a,b)=>a+b,0)
  return (
    <>
      { carrito.map(itemCart => <CartItem key={itemCart.id} itemCart={itemCart}/> ) }
      {onCarrito ? <><button onClick={vaciarCarrito}>Limpiar Carrito</button> <p>Total: { totalCarrito }</p></>: null}
      
      
    </>
  )
}

export default Cart

// const [nombre, setNombre] = useState("")
  // const [email, setEmail] = useState("")
  // const [usuario, setUsuarios] = useState([])
  
  // const handleClick = (e)=>{
  //   let copia= [...usuario]
  //   const usuario ={
  //     nombre:nombre,
  //     email:email
  //   }
  //   copia.push(usuario)
  //   setUsuarios()

  // }
  // const handleChangeName = (e)=>{


  // }
  // const handleChangeEmail= (e)=>{


  // }