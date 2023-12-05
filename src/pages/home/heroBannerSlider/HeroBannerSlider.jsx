import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from "../../../assets/banner-image/banner-1.png";
import banner2 from "../../../assets/banner-image/banner-2.webp";
import banner3 from "../../../assets/banner-image/banner-3.webp";
import banner4 from "../../../assets/banner-image/banner-4.png";
import { Pagination, Autoplay } from 'swiper/modules';
import Button from '../../../components/button/Button';


const HeroBannerSlider = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 ">
      
      <Swiper 
      pagination={{
          clickable: true,
        }} 
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]} className='h-full w-full'>
          <SwiperSlide className='h-full w-full '>
              <div className='flex md:my-0 mt-10  items-center gap-6 justify-center flex-col md:flex-row md:justify-between'>
              <div className='flex-1 flex flex-col md:items-start items-center text-center md:text-start'>
                <h1 className='mb-5 text-3xl  lg:text-5xl font-bold dark:text-white text-web-dark'>Apple Iphone 15 pro max</h1>
                <p className='text-justify dark:text-white dark:text-white mb-7'>The iPhone 15 Pro Max is Apple's most advanced smartphone, featuring a stunning aerospace-grade titanium design, a powerful A17 Bionic chip, a pro camera system with 48MP wide sensor, and an always-on display. It's the perfect phone for power users who demand the best of the best.</p>
                <div className='w-max'>
                  <Button text="Buy Now"></Button>
                </div>
              </div>
              <div className='flex-1'>
                <div className='h-full w-full'>
                <img className='h-full w-full drop-shadow-md' src={banner1} alt="" />
                </div>
              </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='h-full w-full mt-14'>
              <div className='flex md:my-0  h-full w-full md:mt-10  items-center gap-6 justify-center flex-col md:flex-row md:justify-between'>
              <div className='flex-1 flex flex-col md:items-start items-center text-center md:text-start'>
                <h1 className='mb-5 text-3xl dark:text-white  lg:text-4xl font-bold text-web-dark'>Samsung Galaxy Buds2 </h1>
                <p className='text-justify dark:text-white mb-7'>The Samsung Galaxy Buds2 Pro are true wireless earbuds that offer a premium audio experience with Active Noise Cancellation (ANC), 360-degree audio, and a comfortable fit. They feature a sleek design and a long-lasting battery life, making them ideal for everyday use.</p>
                <div className='w-max'>
                  <Button text="Buy Now"></Button>
                </div>
              </div>
              <div className='flex-1'>
                <div className='h-full w-full'>
                <img className='h-full w-full drop-shadow-md animation-image-moving' src={banner2} alt="" />
                </div>
              </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='h-full w-full mt-14'>
              <div className='flex md:my-0 h-full w-full md:mt-10  items-center gap-6 justify-center flex-col md:flex-row md:justify-between'>
              <div className='flex-1 flex flex-col md:items-start items-center text-center md:text-start'>
                <h1 className='mb-5 text-3xl  lg:text-4xl font-bold dark:text-white text-web-dark'>Sony Alpha 7</h1>
                <p className='text-justify mb-7 dark:text-white'>The Sony Alpha 7 is a full-frame mirrorless camera that offers a powerful combination of performance, image quality, and portability. It features a 24.3MP Exmor R CMOS sensor, a BIONZ X image processor, and a wide range of advanced features, including 5-axis image stabilization, 4K video recording, and a fast hybrid autofocus system.</p>
                <div className='w-max'>
                  <Button text="Buy Now"></Button>
                </div>
              </div>
              <div className='flex-1 flex justify-center items-center'>
                <div className='h-full w-full md:w-80'>
                <img className='h-full w-full drop-shadow-md animation-image-moving' src={banner4} alt="" />
                </div>
              </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='h-full w-full mt-14'>
              <div className='flex md:my-0 h-full w-full md:mt-10  items-center gap-6 justify-center flex-col md:flex-row md:justify-between'>
              <div className='flex-1 flex flex-col md:items-start items-center text-center md:text-start'>
                <h1 className='mb-5 text-3xl  lg:text-4xl font-bold dark:text-white text-web-dark'>Intel Core i9-13900K</h1>
                <p className='text-justify dark:text-white mb-7'>The Intel Core i9-13900K 5.8 Ghz Processor is a 24-core, 32-thread desktop processor with a base clock speed of 5.5 GHz and a boost clock speed of 5.8 GHz. It features Intel's new Raptor Lake architecture, which offers significant performance improvements over the previous generation. The i9-13900K is also equipped with 36MB of L3 cache and 24MB of L2 cache. It is a powerful processor that is ideal for gamers, content creators, and other demanding users.</p>
                <div className='w-max'>
                  <Button text="Buy Now"></Button>
                </div>
              </div>
              <div className='flex-1 flex justify-center items-center'>
                <div className='h-full w-full md:w-80'>
                <img className='h-full w-full drop-shadow-md animation-image-moving' src={banner3} alt="" />
                </div>
              </div>
              </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeroBannerSlider