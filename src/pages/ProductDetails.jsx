import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const [productData, setProductData] = useState({})
  let { id } = useParams();

  useEffect(() =>{
    axios.get('https://fakestoreapi.com/products/'+id)
    .then(res => {
          setProductData(res.data)
    })
    .catch(err => {
      console.log("some error")
    })
  }, [])
  return (
    <>
    <h1>{id}</h1>
      <img src = {productData.image}/>
      <p>{productData.title}</p>
      <p>${productData.price}</p>

    </>
  )
}

export default ProductDetails
