
import { CarouselSection } from "./../../Components/Utilties/CarouselSection/CarouselSection";
import "./home.css";
import React from "react";


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

        <CarouselSection />
        
    </section>
  )
}

export default HomePage
