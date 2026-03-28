import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './productcarousel.css';

// Import Images


// import required modules
import { Pagination } from 'swiper/modules';
import ProductCard from '../ProductCard/ProductCard';
import StandardButton from '../StandardButton/StandardButton';

export default function ProductSwipper({title , hideSeeMoreBtn = false , products}) {

  



  return (
    <section className="carousel my-10 h-150 ">
      <h2 className='text-center font-extrabold text-4xl title '>{title}</h2>
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
        {hideSeeMoreBtn ? '' :<StandardButton content={"SEE MORE"} /> }
      </div>
    </section>
  );
}
