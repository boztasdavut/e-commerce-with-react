import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from './Product';
import UrunDetayi from './UrunDetayi';

function UrunDetaylari() {
    const { id } = useParams();
    const products = useSelector((state)=>state.productSlice.products);
    

  return (
    <div>
        <NavigationBar />
        {
            products.map((product)=>{
                if(product.id == id){
                    return <UrunDetayi key={product.id} product={product} />
                    
                }
            })
        }
        

    </div>
  )
}

export default UrunDetaylari
