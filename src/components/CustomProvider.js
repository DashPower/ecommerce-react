import React, { createContext,useContext,useState }  from 'react'
const contexto= createContext()
const Provider=contexto.Provider

const addProduct = (producto,cantidad)=>{
    if(estaEnCarrito()){
      //[{id:1,titulo:"Pantalon,cantidad:3"}] modificar su cantidad mas no agregar otro producto  si es que esta en el carrito
    }
    //if/else
    //localstorage
    //setCarrito()
}
const removeProduct = (id)=>{}
const estaEnCarrito = (id) =>{
   //return true|false
}

export const useCarrito=()=>{
    return useContext(contexto)
}
const CustomProvider = ({children}) => {

  const [carrito,setCarrito]=useState([])
  const [totalProducto,setTotalProducto]=useState(0)
  const vaciarCarrito =()=>{
  setCarrito([])
  }
  const addProduct = (producto,cantidad)=>{
    if(estaEnCarrito()){
      //[{id:1,titulo:"Pantalon,cantidad:3"}] modificar su cantidad mas no agregar otro producto  si es que esta en el carrito
    }
    //if/else
    //localstorage
    //setCarrito()
}
const removeProduct = (id)=>{}
const estaEnCarrito = (id) =>{//return true|false
}
const onAdd = (cantidad)=>
{
  setTotalProducto(totalProducto+cantidad)
}
  const valorDelContexto={
      vaciarCarrito:vaciarCarrito,
      onAdd:onAdd,
    carrito:carrito,
    totalProducto: totalProducto,
    setCarrito:setCarrito,
    setTotalProducto:setTotalProducto
  }
  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CustomProvider