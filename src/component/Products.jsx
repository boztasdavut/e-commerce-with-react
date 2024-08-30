import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';
import "../App.css"
function Products() {
    const products = useSelector((state)=>state.productSlice.products);

    
  return (
    <div className='products-container'>
      {
        products.map((product)=>(
            <Product key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Products
