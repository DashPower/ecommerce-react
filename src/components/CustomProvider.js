import React, { createContext,useContext,useState }  from 'react'
const contexto= createContext()
const Provider=contexto.Provider


export const useCarrito=()=>{
    return useContext(contexto)
}
const CustomProvider = ({children}) => {
  const [carrito,setCarrito]=useState([]) // [variable, functionSeteadora]
  const [totalProducto,setTotalProducto]=useState(0)
  const vaciarCarrito =()=>{
  setCarrito([])
  setTotalProducto(0)
  }
  
  const removeProduct = (id)=>{
    const item = carrito.find(item => id === item.id)
    setTotalProducto(totalProducto - item.cantidad)
    item.cantidad = 0
    const newCart = carrito.filter(item=> id !== item.id)
    setCarrito([...newCart])
  }
  const onAdd = (cantidad)=>
  {
    setTotalProducto(totalProducto+cantidad)
  }
  const removeTotal = (cantidad)=>{
    setTotalProducto(totalProducto - cantidad)
  }
  
  const valorDelContexto={
    removeProduct,
    vaciarCarrito,
    onAdd,
    carrito,
    totalProducto,
    setCarrito,
    setTotalProducto,
    removeTotal
  }

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}

export default CustomProvider
