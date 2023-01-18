import {React,useEffect,useState} from 'react'

const ItemCount = ({precio}) => {
    const [count, setCount] = useState(1)
    const [value, setValue] = useState(precio)
    
    function addCount(){
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
        <button className='botonescart'>Agregar al carrito</button>
        <p>Total: ${value}</p>
    </div>
  )
}

export default ItemCount
