import React, { useContext } from 'react'
import {IoCart} from "react-icons/io5"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CarWidget = () => {

  const {itemQuantity} = useContext(CartContext)

  return (
    <Link to='/cart'>
      <div className='text-black flex items-center'>
        <IoCart className='text-2x1'/>
        <span>{itemQuantity()}</span>
      </div>
    </Link>
  )
}

export default CarWidget