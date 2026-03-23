
import ProductCard from "../ProductCard/ProductCard";
import "./productcarousel.css";
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


const ProductCarousel = () => {


  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const goToPrev = () => emblaApi?.goToPrev()
  const goToNext = () => emblaApi?.goToNext()

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins()?.autoplay?.play()
  }, [emblaApi])
  return (
    <section className="carousel mt-10 h-120">
        <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          
          
          <div className="embla__slide">
            <div className="embla__slide__number">
                
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
          </div>
          
        </div>
      </div>

      <button className="embla__prev" onClick={goToPrev}>
        Scroll to prev
      </button>
      <button className="embla__next" onClick={goToNext}>
        Scroll to next
      </button>
    </div>
    </section>
  )
}

export default ProductCarousel
