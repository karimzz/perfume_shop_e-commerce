import React, {  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './productcarousel';

// Import Images
import img1 from "./../../../assets/images/product1.png";
import img2 from "./../../../assets/images/product2.png";
import img3 from "./../../../assets/images/product3.png";
import img4 from "./../../../assets/images/product4.png";

// import required modules
import { Pagination } from 'swiper/modules';
import ProductCard from '../ProductCard/ProductCard';
import StandardButton from '../StandardButton/StandardButton';

export default function ProductSwipper() {

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

  return (
    <section className="carousel mt-10 h-120 ">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
        
      >
        
        
        {
          /* For Mapping Producs */
          products?.map((product)=><SwiperSlide><ProductCard key={product.id} imgSrc={product.img} /></SwiperSlide>)
        }
        
      </Swiper>
      <div className="flex justify-center">
        <StandardButton content={"SEE MORE"} />
      </div>
    </section>
  );
}
