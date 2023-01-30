import {React,useEffect,useState} from 'react'
import { useCarrito } from './CustomProvider'

const ItemCount = ({precio,stock,item}) => {
    const [count, setCount] = useState(1)
    const [value, setValue] = useState(precio)
    const {onAdd,setCarrito,carrito}=useCarrito(0)
    
    function add (count=1,item){
      onAdd(count)
      
      if(!carrito.some(e=>e.name === item.name)){ // si no esta dentro del carrito
        item.cantidad = count // seteamos la cantidad
        setCarrito([...carrito, item]) // lo añadimos
      }
      else{ // si ya existe
        const itemEncontrado = carrito.find(e=>e.name ===item.name)
        itemEncontrado.cantidad += count
      }
     
    }
    function addCount(){
      if(count<stock)
        setCount(count + 1)
    }
    function removeCount(){
      if(count > 1){
        setCount(count - 1)
      }
    }
    useEffect(()=>{
        setValue(precio*count)
    },[precio, count])

   
  return (
    <div className="countbutton">
        <button className='botonescart material-icons' onClick={removeCount}>remove</button>
        <p className='counter'>{count}</p>
        <button className='botonescart material-icons' onClick={addCount}>add</button>
        <button className='botonescart' 
        onClick={()=>{add(count,item)}}>Agregar al carrito</button>
        <p>Total: ${value}</p>
    </div>
  )
}

export default ItemCount
