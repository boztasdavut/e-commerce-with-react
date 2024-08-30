import React from 'react'
import "./App.css"
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { deleteProduct } from './SepetData';



function SepetUrunlerList(props) {
    const dispatch = useDispatch();
  return (
    <div className="product-container">
      <div className="product-inner-container">
        <div>
          <img src={props.product.product.image} width={"100%"} height={"200px"} />
        </div>
        <div className="product-title-container">{props.product.product.title}</div>
        <div className="product-price-container">
            <div>{props.product.product.price} TL</div>
            <div>Adet: {props.product.count}</div>
             

        </div>
        <div className='sepetten-kaldir-container'>
            Kaldır
            <br />
            <CiCircleRemove onClick={()=>dispatch(deleteProduct(props.product))} className='sepette-kaldir' />

        </div>
      </div>
    </div>
  );
}

export default SepetUrunlerList
