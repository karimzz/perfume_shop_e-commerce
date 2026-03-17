import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
  import "./Carousel.css"
import Autoplay from 'embla-carousel-autoplay'

import coverPhoto from "./../../../assets/images/p1.png";


import { IoMdArrowDropleft } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";





export function CarouselSection() {
  

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
    // emblaApi.plugins().autoplay?.play()

    // Photo store
    const [photos ] = useState([
      {
        "imgSrc" : coverPhoto
      },
      {
        "imgSrc" : coverPhoto
      },
      {
        "imgSrc" : coverPhoto
      }
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0)

  const [scrollSnaps, setScrollSnaps] = useState([])

  const goTo = (index) => emblaApi?.scrollTo(index)
  const setupSnaps = (emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
    console.log(emblaApi.scrollSnapList())
  }

 const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  

      useEffect(() => {
    if (!emblaApi) return

    emblaApi.plugins().autoplay?.play()
    console.log(emblaApi.slidesInView())
        setupSnaps(emblaApi)


  const onSelect = () => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    console.log(emblaApi.selectedScrollSnap())
  }

  emblaApi.on("select", onSelect)

  

  // set initial
  onSelect()

  }, [emblaApi]);

  



  return (
    <div className="container">
      <section  className="carouselsection con-carosuel">
      <div className="container">
        <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          { /* For Slide the photo */}
          {
            photos.map((photo , idx)=>{
              return <div className="embla__slide" key={idx}> <img src={photo.imgSrc} alt="" /> </div>
            })
          }
        </div>
      </div>

      <button className="embla__prev absolute arrow-left rounded-sm" onClick={scrollPrev} > <MdKeyboardArrowLeft />
 </button>
      <button className="embla__next absolute arrow-right rounded-sm " onClick={scrollNext}> <MdKeyboardArrowRight /> </button>

      <br />
       <div className="embla__dots flex items-center justify-center gap-6">
        {scrollSnaps.map((_, index) => (
          <button
            className="embla__dot"
            key={index}
            onClick={() => goTo(index)}
          >
            {/* Button content */}

            <span
        className={`circle ${index === selectedIndex ? "active" : ""}`}
      ></span>

          </button>
        ))}
      </div>
    </div>
      </div>
    </section>
    </div>
  )
}