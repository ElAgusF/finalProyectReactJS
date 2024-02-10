import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from '../components/Button/Button'
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, total, emptyCart, removeItem} = useContext(CartContext)

  return (
    <div>
        {
            cart.length === 0?
            <h3>No hay productos en el carrito</h3>
            :
            <>
            <h2>Tu Compra</h2>
            {
                cart.map((item) => (
                    <>
                        <div key={item.id} className='pl-6 border-b border-b-black'>
                            <h3>{item.name}</h3>
                            <img className='h-20' src={item.img} alt={item.name} />
                            <p>Precio: ${item.price}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <button className='btn btn-danger' onClick={()=>removeItem(item.id)}><BsFillTrashFill /></button>
                        </div>
                    </>
                )) 
            }
            </>
        }
        <h3>Total compra $ {total()}</h3>
        <Button color='red' label='Vaciar carrito' callback={emptyCart}/>
        <Link to="/checkout" className="btn btn-success m-2">Terminar mi compra</Link>
    </div>
  )
}

export default Cart