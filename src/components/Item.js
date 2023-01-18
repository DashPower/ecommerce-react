import React from 'react';
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className='card'>
        <img src={props.img}/>
        <h4>{props.name}</h4>
        <p>Categorias: {props.category.join(" ")}</p>
        <p className='price'>${props.price}</p>
        <Link to={`/item/${props.id}`}><button className='botones'>Ver más</button></Link>
    </div>
  )
}

export default Item