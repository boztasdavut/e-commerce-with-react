import React from "react";
import "../App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate();
  return (
    <div className="product-container">
      <div className="product-inner-container">
        <div>
          <img src={props.product.image} width={"100%"} height={"200px"} />
        </div>
        <div className="product-title-container">{props.product.title}</div>
        <div className="product-price-container">{props.product.price} TL</div>
        <div className="product-buton-container">
          <button onClick={() => navigate("/urundetaylari/"+props.product.id)}>
            Ürün Detayları
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
