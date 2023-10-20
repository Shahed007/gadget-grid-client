import { useLoaderData } from "react-router-dom"
import Button from "../../components/button/Button";
import { Swiper, SwiperSlide } from 'swiper/react';

import add1 from "../../assets/advartisement/add-1.avif";
import add2 from "../../assets/advartisement/add-2.webp";
import add3 from "../../assets/advartisement/add-3.avif";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const ProductDetails = () => {
  const loaderSingleProduct = useLoaderData();
  const {_id,brandName, image, products, specification} = loaderSingleProduct || {};
  return (
    <section className="mt-[135px] ">
    <div className="backdrop-blur-sm  bg-white relative after:absolute after:h-full after:top-0 after:right-0 after:w-1/2 after:bg-primary/20">
    <div className="max-w-7xl md:flex-row flex items-center flex-col gap-7 mx-auto px-3 py-12">
          <div className="flex-1 z-20">
            <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl text-web-dark">{brandName.toUpperCase()}</h3>
            <p className=" text-web-dark text-3xl">${products[1]}</p>
            </div>
            <h2 className="mt-5 text-3xl text-web-dark font-semibold">{products[0].toUpperCase()}</h2>
            <div className="mt-4">
              <h4 className="text-xl mb-3 text-web-dark font-medium">
                  Specification
              </h4>
              <p className="leading-10 text-base text-justify">{specification}</p>
            </div>
            <div className="mt-6">
            <h4 className="text-xl text-web-dark font-medium">Description</h4>
            <p >
              {products[3]}
            </p>
            <div className='flex items-center gap-2 mt-5'>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star text-gray-800 h-4 w-4" checked onChange={()=>{}}/>
              <input type="radio" name="rating-1" className="mask mask-star text-gray-800 h-4 w-4" checked onChange={()=>{}} />
              <input type="radio" name="rating-1" className="mask mask-star text-gray-800 h-4 w-4" checked onChange={()=>{}}/>
              <input type="radio" name="rating-1" className="mask mask-star text-gray-800 h-4 w-4" checked onChange={()=>{}}/>
              <input type="radio" name="rating-1" className="mask mask-star text-gray-800 h-4 w-4" checked onChange={()=>{}}/>
            </div>
            <p >{products[2]}</p>
            </div>
            </div>
          </div>
          <div className="flex-1 w-full h-full flex flex-col gap-6 z-20">
            <img className="h-full w-full" src={image} alt={`image of ${products[0]}`} />
              <div className="flex items-center gap-4 w-full  lg:flex-row flex-col">
                <div className="flex-1">
                  <Button text="Add to product" className="w-full" link="#"></Button>
                </div>
                <div className="flex-1">
                <Button text="Update product" className="w-full" link="#"></Button>
                </div>
              </div>
          </div>
      </div>
    </div>
    <div className="my-12 h-screen">
    <Swiper 
        pagination={{
          clickable: true,
        }} 
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]} 
        className="h-full w-full"
      >
        <SwiperSlide className="w-full h-full"><img className="w-full h-full" src={add1} alt="" /></SwiperSlide>
        <SwiperSlide className="w-full h-full"><img className="w-full h-full" src={add2} alt="" /></SwiperSlide>
        <SwiperSlide className="w-full h-full"><img className="w-full h-full" src={add3} alt="" /></SwiperSlide>
      </Swiper>
    </div>
    </section>
  )
}

export default ProductDetails