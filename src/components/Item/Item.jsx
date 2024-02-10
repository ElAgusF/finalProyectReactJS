import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className='w-40'>
        <h2><strong>{product.name}</strong></h2>
        <p>{product.description}</p>
        <img src={product.img}/>
        <Link to={`/producto/${product.id}`}>Ver detalles</Link>
    </div>
  )
}

export default Item