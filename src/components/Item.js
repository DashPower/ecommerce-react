import React from 'react';
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link className='card' to={`/item/${props.id}`}>
        <img src={props.img}/>
        <h4>{props.name}</h4>
        <p>Categorias: {props.category.join(" ")}</p>
        <p className='price'>${props.price}</p>
        <button className='botones'></button>
    </Link>
  )
}

export default Item