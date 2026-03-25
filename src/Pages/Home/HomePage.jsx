
import ProductCarousel from "./../../Components/Utilties/ProductCarouselSection/ProductCarousel";
import { CarouselSection } from "./../../Components/Utilties/CarouselSection/CarouselSection";
import "./home.css";
import React, { useState } from "react";
import ProductSwipper from "./../../Components/Utilties/ProductCarouselSection/ProductCarosuelSwipper";
import StandardButton from "./../../Components/Utilties/StandardButton/StandardButton.jsx";
import CategoriesProductGallery from "./../../Components/Home/CategoriesGallery/CategoriesProductGallery.jsx";

import img1 from "./../../assets/images/product1.png"
import img2 from "./../../assets/images/product2.png";
import img3 from "./../../assets/images/product3.png";
import img4 from "./../../assets/images/product4.png";

import img5 from "./../../assets/images/product5.png"
import img6 from "./../../assets/images/product6.png";
import img7 from "./../../assets/images/product7.png";
import img8 from "./../../assets/images/product8.png";


const HomePage = () => {

    const [products ] = useState([

    {
      id : 1,
      img : img1
    },
    {
      id : 2,
      img : img2
    },
    {
      id : 3,
      img : img3
    }
    ,
    {
      id : 4,
      img : img4
    },
    {
      id : 1,
      img : img1
    },
    {
      id : 2,
      img : img2
    },
    {
      id : 3,
      img : img3
    }
    ,
    {
      id : 4,
      img : img4
    }
    
  ]);

  const [products2 ] = useState([

    {
      id : 1,
      img : img5
    },
    {
      id : 2,
      img : img6
    },
    {
      id : 3,
      img : img7
    }
    ,
    {
      id : 4,
      img : img8
    },
    {
      id : 1,
      img : img5
    },
    {
      id : 2,
      img : img6
    },
    {
      id : 3,
      img : img7
    }
    ,
    {
      id : 4,
      img : img8
    }
    
  ]);


  return (
    <section className='home'>
        <div className="discount-bar">
            <div className="container">
                <div className="dis-offer">
                    <p>25% OFF - sitewide  </p>
                    <span>-</span>
                    <a href="#">click here</a>
                </div>

                <div className="or">
                    <p>OR</p>
                </div>

                <div className="dis-offer">
                    <p>Free Shipping $100 min  </p>
                    <span>-</span>
                    <a href="#">click here</a>
                </div>
            </div>
        </div>

        

        <div className="container">
            <CarouselSection />
            
            <a href="#" className="panner mt-5">
            </a>

            <div className="shop-all flex justify-center items-center flex-col ">
                <h2>SHOP OUR COLLECTION</h2>
                <p  className="mb-3">Our delicious, limited-edition collection</p>
                <StandardButton content={"SHOP ALL"} />
            </div>
            
            <CategoriesProductGallery />

            <ProductSwipper products={products} title={"RECOMMENDED FOR YOU"} />


            <ProductSwipper products={products2} title={"NEW ARRIVALS!"} hideSeeMoreBtn={true} />



        </div>
        
    </section>
  )
}

export default HomePage
