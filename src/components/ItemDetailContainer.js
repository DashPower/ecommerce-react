import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {db} from "./../firebase"
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const {itemId} = useParams()
  const [item, setItem] = useState()
  useEffect(() => {
    const productosCollection = collection(db,"productos")
    const reference = doc(productosCollection, itemId)
    const pedidoFirestore = getDoc(reference)
    pedidoFirestore
    .then((response)=>{
      const producto = response.data()
      setItem(producto)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [itemId])

  return <ItemDetail item={item}/>
}

export default ItemDetailContainer