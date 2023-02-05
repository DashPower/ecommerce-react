import React from "react"
import Item from "./Item"

function ItemList (props) {
   return(
    <div className="cards" >
        {props.productos.map((item)=>
        {
        return(
         <Item 
            key={item.id}
            id={item.id} 
            img={item.img} 
            name={item.name} 
            price={item.price} 
            category={item.category}/>)
        })}
    </div>
   )
}

export default ItemList