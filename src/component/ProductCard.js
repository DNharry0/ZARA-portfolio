import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
      <div className="card" onClick={()=>showProduct(item.id)}>
        <img src={item?.img} />
        <div>{item?.new == true ? "NEW" : ""}</div>
        <div>{item?.trend == true ? "TREND" : ""}</div>
        <div>{item?.title}</div>
        <div>{item?.price.toLocaleString()}원</div>
      </div>
  );
};

export default ProductCard;
