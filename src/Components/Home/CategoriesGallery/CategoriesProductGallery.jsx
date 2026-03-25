import "./categoriesProductGallery.css";
import React, { useState } from 'react';
import img1 from "./../../../assets/images/Component28.png"
import img2 from "./../../../assets/images/Component28-1.png"
import img3 from "./../../../assets/images/Component31.png"
import img4 from "./../../../assets/images/Component33.png"
import img5 from "./../../../assets/images/Component51.png"
import img6 from "./../../../assets/images/Component32.png"
import CategoryCard from "../CategoryCard/CategoryCard.jsx";


const CategoriesProductGallery = () => {

  const [allCategoryCard ] = useState([
    {
      id : 2, 
      img : img2,
      title: "WOMEN'S PERFUME",
      link : "#"
    },
    {
      id : 5, 
      img : img5,
      title: "MEN'S COLOGNE",
      link : "#"
    },
    {
      id : 1, 
      img : img1,
      title: "HAIRCARE",
      link : "#"
    },
    
    {
      id : 3, 
      img : img3,
      title: "SKINCARE",
      link : "#"
    },
    {
      id : 4, 
      img : img4,
      title: "GIFT SETS ",
      link : "#"
    },
    
    {
      id : 6, 
      img : img6,
      title: "BEST SELLERS",
      link : "#"
    },
  ])

  return (
    <div className="  product-gallery-section flex flex-wrap gap-5">
        {
          allCategoryCard?.map((card)=>{
             return (<CategoryCard key={card.id} link={card.link} img={card.img} title={card.title}  />)
          })
        }
    </div>
  );
};

export default CategoriesProductGallery
