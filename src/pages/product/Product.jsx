import { useLoaderData, useNavigation, useParams } from "react-router-dom"
import ProductCard from "../../components/card/ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import add1 from "../../assets/advartisement/add-1.avif";
import add2 from "../../assets/advartisement/add-2.webp";
import add3 from "../../assets/advartisement/add-3.avif";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { Helmet } from "react-helmet-async";


const Product = () => {
  const loaderProduct = useLoaderData();
  const navigation = useNavigation();
  const brandName = useParams();
  return (
    <>
      <Helmet>
        <title>GadgetGrid || Product</title>
      </Helmet>
      <section className="mt-[135px] mb-16 bg-transparent">
    <div className="bg-gradient-to-l h-40 flex justify-center items-center backdrop-blur-lg  from-primary/30 to-secondary/30 w-full">
    <h2 className="text-center py-6  text-web-dark font-extrabold text-4xl uppercase">{brandName.brandName.toUpperCase()} Products</h2>
    </div>
      {
        loaderProduct.length === 0 ?
        <p className="h-screen w-full flex justify-center items-center text-center text-2xl font-bold text-web-dark">
           This brand has no products
        </p>
        :
        navigation.state === "loading" ?
        <div className="h-screen w-full flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
        </div>
        :
        <>
        <div className="max-w-7xl mx-auto gap-6 px-3 pt-12 grid grid-cols-1 md:grid-cols-2">
        {
          loaderProduct?.map(prod => <ProductCard key={prod._id} prod={prod}></ProductCard>) 
        }
      </div>
      <div className="mt-12 h-screen">
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
        </>
      }
    </section>
    </>
  )
}

export default Product