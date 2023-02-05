import React from 'react'
import ItemCount  from "./ItemCount";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const ItemDetail = ({item}) => {
  
  

  if(!item){
    return Loading.standard("Cargando Productos...")
  }
  
  return (
    
    <div className='more'>
      {Loading.remove(200)}
      <div className='image'>
        <div>
              <img src={item.img} alt={item.nombre} />
        </div>
      </div>
      <div className='content'>
          <div className='texto'>
            <h1>
                {item.name}
            </h1>
            <h3>
               Categorias: {item.category.map((cat) => {
                    return (
                        <span key={cat}> {cat} </span>
                    )
                })
                }
            </h3>
            <p>
              ${item.price}
            </p>
            <ItemCount precio={item.price} stock={5} item={item} />
          </div>
      </div>
    </div>
  )
}

export default ItemDetail