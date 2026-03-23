
import ProductCarousel from "./../../Components/Utilties/ProductCarouselSection/ProductCarousel";
import { CarouselSection } from "./../../Components/Utilties/CarouselSection/CarouselSection";
import "./home.css";
import React from "react";
import ProductSwipper from "./../../Components/Utilties/ProductCarouselSection/ProductCarosuelSwipper";
import StandardButton from "./../../Components/Utilties/StandardButton/StandardButton.jsx";


const HomePage = () => {
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

            <ProductSwipper />


        </div>
        
    </section>
  )
}

export default HomePage
