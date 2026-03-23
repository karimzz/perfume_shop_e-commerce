
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import ProductCategoryImg from "./../../../assets/images/ProductCategory.png";
import "./productCard.css";
import React, { useState } from 'react';


const ProductCard = ({imgSrc}) => {

  // State for control Liked Products
  const [like , setLike] = useState(false);

  // For Hanlde Favorite PRoduct
  const LikeProductHandler  = ()=>{
    setLike(!like)
  }

  return (
    <div className="card-component">
        <div className="top flex items-center justify-between">
          <img className="cat-img" src={ProductCategoryImg} alt="" />
          <button className={``} onClick={LikeProductHandler}>
            {like ?    <FaHeart className="fill-heart" fill="red" /> : <FaRegHeart className="empty-heart"  /> }
          </button>
        </div>
        <a href="#" className="flex items-center flex-col justify-center">
            <div className="image">
            <img className="product-img" src={imgSrc} alt="" />
          </div>
          <div className="details">
            <p className="product-name">Jo Malone Vetiver & Go</p>
            <p className="own-by">by  <span className="underline" >Ipsa</span></p>
            <p className="brand">Luminizing Clay</p>
            <p className="price">from <span className="text-xl font-extrabold pl-3">$51.74 </span></p>
          </div>
          <button className="add-btn mt-10">
            ADD TO BAG
          </button>
        </a>
    </div>
  )
};


export default ProductCard
