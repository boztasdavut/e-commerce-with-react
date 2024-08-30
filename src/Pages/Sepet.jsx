import React from 'react'
import Product from '../component/Product';
import { useSelector } from 'react-redux';
import NavigationBar from '../component/NavigationBar';
import "../App.css"
import SepetUrunlerList from '../SepetUrunlerList';


function Sepet() {
    const sepetUrunleri = useSelector((state)=>state.sepetData.sepetProducts);
    console.log(sepetUrunleri);
    const count = useSelector((state)=>state.sepetData.totalPrice);
  return (
    <div>
        <NavigationBar />
        <div className='sepet-container'>
            {
                sepetUrunleri.map((product)=>(
                    <SepetUrunlerList key={product.product.id} product={product} />
                ))
            }
        </div>
        <hr />
        <h2 style={{color:"red"}}>
            Ücret: {count.toFixed(2)}
        </h2>
        
      
    </div>
  )
}

export default Sepet
