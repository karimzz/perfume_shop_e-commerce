import React, { useState } from 'react'
import "./footer.css"

import foot1 from "./../../../assets/images/foot1.png"
import foot2 from "./../../../assets/images/foot2.png"
import foot3 from "./../../../assets/images/foot3.png"
import foot4 from "./../../../assets/images/foot4.png"
import foot5 from "./../../../assets/images/foot5.png"

const Footer = () => {

    // for store icons card
    const [titles ] = useState([
        {
            icon : foot1,
            text : "Free Delivery & Returns"
        },
        {
            icon : foot2,
            text : "Online Self-Service"
        },
        {
            icon : foot3,
            text : "100% Genuine Guaranted"
        },
        {
            icon : foot4,
            text : "Secure Paymnet"
        },
        {
            icon : foot5,
            text : "100% Authentic PRoducts"
        },
    ])


  return (
    <footer >
        <div className="sub-title ">
            
                <div className="container flex items-center justify-between">
                    {
                    titles?.map((item)=>{
                        return(
                            <div className="card">
                                <div className="icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <p className='text'>{item.text}</p>
                            </div>
                        )
                    })
                }
                </div>
            
            
        </div>
    </footer>
  )
}

export default Footer
