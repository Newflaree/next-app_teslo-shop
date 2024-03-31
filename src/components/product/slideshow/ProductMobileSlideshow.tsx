'use client';
// React
import {
  useRef,
  useState
} from 'react';
// Next JS
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import './slideshow.css';

import {
  Autoplay,
  FreeMode,
  Navigation,
} from 'swiper/modules';


interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideshow = ({
  images,
  title,
  className
}: Props) => {
  return (
    <div className={ className }>
      <Swiper
        style={{
          padding: 0,
          margin: 0,
          width: '100vw',
          height: '500px'
        }}
        navigation={ true }
        autoplay={{
          delay: 3000
        }}
        modules={[
          Autoplay,
          FreeMode,
          Navigation,
        ]}
        className='mySwiper2'
      >
        {
          images.map( image => (
            <SwiperSlide key={ image }>
              <Image
                width={ 600 }
                height={ 500 }
                src={ `/products/${ image }` }
                alt={ title }
                className='object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
