import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const {itemId} = useParams()
  const [productos, setProductos] = useState([])
  const [item, setItem] = useState()
  useEffect(() => {
    fetch("/dota2products.json")
    .then(res => res.json())
    .then(data => setProductos(data.productos) )
  }, [])
  useEffect(() => {
    if(productos.length !== 0){
      const itemSelect = productos.find(producto => producto.id === parseInt(itemId))
      setItem(itemSelect)
    }
  }, [productos, itemId])
  return (
    <>
      <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer