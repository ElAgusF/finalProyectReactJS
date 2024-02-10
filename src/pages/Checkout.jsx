import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import {Navigate} from 'react-router-dom'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'

const Checkout = () => {

  const {cart, emptyCart, total} = useContext(CartContext)

  const [values, setValues] = useState({
    name: '',
    adress: '',
    email: ''
  })
    
  const [orderId, setOrderId] = useState(null)

  const handleInputChange = (e) => {

    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
  }

  const ordersRef = collection(db, 'orders')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (values.name.length <3) {
        alert('El nombre ingresado no supera los caracteres necesarios (3 caracteres)')
        return
    }

    if (values.adress.length <6) {
        alert('La dirección ingresada no supera los caracteres necesarios (6 caracteres)')
        return
    }

    if (values.email.length <3) {
        alert('El email ingresado no supera los caracteres necesarios (3 caracteres)')
        return
    }

    const order = {
        cart,
        datosCliente: values,
        fyh: new Date(),
        total: total(),
    }

    addDoc(ordersRef, order)
        .then((doc) => {
            setOrderId(doc.id)
            emptyCart()
        })
        .catch((err) => console.log(err))

    cart.forEach((item) => {
        const docRef = doc(db, 'products', item.id)
        getDoc(docRef)
            .then((doc) => {
                let stock = doc.data().stock
                if (stock - item.cantidad >= 0){
                    updateDoc(docRef, {stock: stock - item.cantidad})
                 } else {
                    alert('no hay stock de' + doc.data().name)
                 }
            })
    })

  }

  if(orderId){
    return (
        <div>
            <h3>Tu orden se generó correctamente</h3>
            <p>Por favor guarde su número de orden <strong>{orderId}</strong></p>
        </div>
    )
  }if (cart.length === 0){
    return <Navigate to='/'/>
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                required
                placeholder='Tu nombre'
                name='name'
                onChange={handleInputChange}  
            />
            <input
                type="text"
                required
                placeholder='Dirección'
                name='adress'
                onChange={handleInputChange}  
            />
            <input
                type="email"
                required
                placeholder='Email'
                name='email'
                onChange={handleInputChange}  
            />
            <button className='btn btn-success' type='submit'>Confirmar compra</button>

        </form>
    </div>
  )
  
}
//const {cart, emptyCart, total} = useContext(CartContext)
//
//const [values, setValues] = useState({
//    name: '',
//    adress: '',
//    email: ''
//})



export default Checkout