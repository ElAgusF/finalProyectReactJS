import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../assets/data/products'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

const ItemListContainer = ({greeting}) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const { category } = useParams()


  

  useEffect(()=>{
    setLoading(true)
      const productsRef = category
        ? query(collection(db, 'products'), where('category', '==', category))
        : collection(db, 'products')

      getDocs(productsRef)
        .then(snapshot =>{
          const productsFormatted = snapshot.docs.map( doc => {
            const data = doc.data()
            return {id: doc.id, ...data}
          })
          setProducts(productsFormatted)
        }).finally(()=>{
          setLoading(false)
        })
//    const fetchProducts = async () => {
//      try{
//        setLoading(true);
//        const result = category
//          ? await getProductsByCategory(category)
//          : await getProducts();
//        setProducts(result)
//      } catch(error) {
//        console.error('Error en el fetch de useEffect', error);
//      } finally{
//        setLoading(false);
//      }
//    };
//
//    fetchProducts();
  }, [category]);

  return (
    <div className='w-full flex justify-center items-center text-3x1'>
      {loading
        ?
        <div>Cargando...</div>
        :
        <ItemList products={products}/>

      }
      
    </div>
  )
}

export default ItemListContainer