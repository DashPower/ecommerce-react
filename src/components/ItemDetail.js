import React from 'react'
import ItemCount  from "./ItemCount";
const ItemDetail = ({item}) => {
  if(!item){
    return <h1>Cargando...</h1>
  }
  return (
    <div className='more'>
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
            <ItemCount precio={item.price} />
          </div>
      </div>
    </div>
  )
}

export default ItemDetail