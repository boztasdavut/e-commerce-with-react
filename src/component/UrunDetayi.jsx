import React, { useState } from 'react'
import "../App.css"
import { useDispatch } from 'react-redux'
import { addProduct } from '../SepetData';
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";




function UrunDetayi(props) {
    const dispatch = useDispatch();
    const [urunSiparisSayisi, setUrunSiparisSayisi] = useState(1);

    const handleChange = (newValue) =>{
      if(urunSiparisSayisi > 1){
        setUrunSiparisSayisi(newValue);
      }
    }


  return (
    <div className='urun-detay-container'>
    <div className='urun-detay-inner-container'>
     <div className='urun-detay-image-container'>
        <img src={props.product.image} width={"200px"} height={"200px"} />
      </div>
      <div className='urun-detay-title-container'>
        {props.product.title}
        <br />
        {props.product.description}
      </div>
      <div className='urun-detay-price-container'>
        {props.product.price} TL
      </div>

      <div className='urun-detay-buton-container'>

        <button className='sepeteEkleButonu' onClick={()=>dispatch(addProduct({product: props.product, urunSiparisSayisi:urunSiparisSayisi}))}>Sepete Ekle</button>
      </div>
      <div className='urun-detay-artirma-azaltma-container'>
        <CgMathMinus className='azaltma-isareti' onClick={()=>handleChange(urunSiparisSayisi - 1)} />
          <span className='urun-siparis-sayisi' >{urunSiparisSayisi}</span>
        <CgMathPlus className='artirma-isareti' onClick={()=>setUrunSiparisSayisi(urunSiparisSayisi + 1)} />
      </div>
    </div>
      
    </div>
  )
}

export default UrunDetayi
