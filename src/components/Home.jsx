import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.webp'
import { Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <div className='moviesCollection' >
      <Carousel infiniteLoop autoPlay interval={2000} showArrows={false} showStatus={false} showThumbs={false}  >
        <div >
          <Image src={img1} alt="item" h={'55rem'} w={'100%'} objectFit={'cover'} />
        </div>
        <div>
          <Image src={img2} alt="item2" h={'55rem'} w={'100%'} objectFit={'cover'} />
        </div>
        <div>
          <Image src={img3} alt="item2" h={'55rem'} w={'100%'} objectFit={'cover'} />
        </div>
      </Carousel>

    </div>
  )
}

export default Home
