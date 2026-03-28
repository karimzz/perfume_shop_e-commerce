import React from 'react'
import certificatePanner from "./../../../assets/images/certificate.png"
import cert1 from "./../../../assets/images/cert1.png"
import cert2 from "./../../../assets/images/cert2.png"

import "./certificatesection.css"


const CertificateSection = () => {
  return (
    <div className="certificate-section">
              <a href="#" className="certificate-panner" >
                <img src={certificatePanner}  alt="" />
              </a>
              <div className="cards-cert flex flex-wrap items-center  mt-4">
                <a href="">
                  <img src={cert1} alt="" />
                </a>
                <a href="">
                  <img src={cert2} alt="" />
                </a>
              </div>
            </div>
  )
}

export default CertificateSection
