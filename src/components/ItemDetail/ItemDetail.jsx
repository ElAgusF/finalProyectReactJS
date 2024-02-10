import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {
        const [counter, setCounter] = useState(1)
        const [addedProduct, setAddedProduct] = useState({})

        const {addToCart, cart, isInCart} = useContext(CartContext)

        const handleAdd = () =>{
            setCounter(counter+1)
        }
        const handleSubstract = () =>{
            setCounter(counter-1)
        }
        const handleAddToCart = () =>{
            const newItem = {...producto, cantidad:counter}
            
            addToCart(newItem)
        }
  
    return (
    <>
    {producto &&
        <>
        <div>{producto.id}</div>
        <div>{producto.name}</div>
        <div>{producto.price}</div>
        <div>{producto.description}</div>
        <img style={{width: 400, height: 250}} src={producto.img} />

        {
            isInCart(producto.id)
            ? <Link to='/cart'><Button label='Ir al Carrito' callback={handleAdd}/></Link>
            :
            <>
            <Button color='red' label='-' callback={handleSubstract}/>
            <div>cantidad: {counter}</div>
            <Button color='green' label='+' callback={handleAdd}/>
            <div></div>
            <Button label='agregar al carrito' callback={()=> handleAddToCart()}/>
            </>
        }
        </>
    }
    </>    
  )
}

export default ItemDetail