import ItemList from "./ItemList"
import { useState,useEffect} from "react"
import { useParams } from 'react-router-dom'
import {db} from "./../firebase"
import { collection, getDocs, where, query } from "firebase/firestore"
import { Loading } from 'notiflix/build/notiflix-loading-aio';

function ItemListContainer(props){
const [data, setData] = useState([])
  const { categoryId } =  useParams()

  useEffect(() => {
      const productosCollection = collection(db,"productos")
      let filtros = query(productosCollection)
      if(categoryId){
        filtros = query(
          productosCollection,
          where("category", "array-contains", categoryId)
        )
      }
      const pedidoFirestore =getDocs(filtros)
      pedidoFirestore
      .then((res)=>{
        const productos = res.docs.map((doc)=>({
          ...doc.data(),
          id: doc.id      
            
        }))
        setData(productos)
      })
  }, [props.isAll, categoryId])

        return(
            <>
            {data.length === 0 && Loading.hourglass("Cargando Productos...")}
            {data.length !== 0 && Loading.remove(500)}
              <section className="bienvenida">
                <p>¡Bienvenido a DotaStore!, ¿Qué objeto interesante llevaras el dia de hoy?</p>
                <p>¿Deseas algo en particular?</p>
              </section>
              <ItemList productos={data}/>
            </> 
        )
} 

export default ItemListContainer