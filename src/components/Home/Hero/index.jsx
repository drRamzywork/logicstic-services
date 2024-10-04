import React, { useEffect, useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';


// Siwper
// navigation={{
//   prevEl: prevRef.current,
//   nextEl: nextRef.current,
// }}
// ref={swiperRef}


const Hero = () => {
  const swiperRef = useRef();
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
      setIsSwiperInitialized(true);
    }
  }, [swiperRef, prevRef, nextRef]);
  return (
    <section id='hero'>





      <div ref={prevRef} className={'left_arrow'}>
        <HiChevronLeft />
      </div>
      <div ref={nextRef} className={'right_arrow'}>
        <HiChevronRight />
      </div>
    </section>
  )
}

export default Hero