import {React,useEffect,useState} from 'react'
import { useCarrito } from './CustomProvider'

const ItemCount = ({precio,stock,item}) => {
    const [count, setCount] = useState(1)
    const [value, setValue] = useState(precio)
    const {onAdd,setCarrito,carrito}=useCarrito(0)
    
    function añadir (count=1,item){
      onAdd(count)
      
      if(!carrito.some(e=>e.nombre === item.nombre)){
        setCarrito([...carrito, item]) 
      }
      else{
        carrito.find(e=>e.nombre ===item.nombre).cantidad += count
        console.log(count)
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
        onClick={()=>{añadir(count,item)}}>Agregar al carrito</button>
        <p>Total: ${value}</p>
    </div>
  )
}

export default ItemCount
