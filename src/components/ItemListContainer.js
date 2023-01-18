import ItemList from "./ItemList"
import { useState,useEffect} from "react"
import { useParams } from 'react-router-dom'

function ItemListContainer(props){
const [data, setData] = useState([])
  const { categoryId } =  useParams()
  useEffect(() => {
    if(!categoryId)
    {
      fetch("/dota2products.json")
      .then(res => res.json())
      .then(data => setData(data.productos) )
    }

    else
    {
      fetch("/dota2products.json")
      .then(res => res.json())
      .then(data => setData(data.productos.filter(producto => producto.category.includes(categoryId))))
    }
  }, [props.isAll, categoryId])

        return(
            <>
                <section className="bienvenida">
                    <p>¡Bienvenido de vuelta {props.greetings}, ya te extrañabamos por estas tierras!</p>
                    <p>¿Deseas algo en particular?</p>
                </section>
                <ItemList productos={data}/>
                
            </>
            
        )
} 

export default ItemListContainer