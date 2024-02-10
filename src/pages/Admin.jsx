
import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { db } from '../services/firebaseConfig'

const productsRef = collection(db, 'products')

const handleUpload = () => {
    productsRef.forEach((item) =>{
        delete item.id
        addDoc(productsRef, item)
    })
}

const Admin = () => {
  return (
    <div onClick={()=>handleUpload()}>subir productos</div>
  
    )
}

export default Admin