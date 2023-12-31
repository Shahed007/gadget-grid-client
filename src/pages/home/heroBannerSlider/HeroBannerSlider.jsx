import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import banner1 from "../../../assets/banner-image/banner-1.png";
import banner2 from "../../../assets/banner-image/banner-2.webp";
import banner3 from "../../../assets/banner-image/banner-3.webp";
import { Autoplay } from "swiper/modules";
import Button from "../../../components/button/Button";
import Container from "../../../components/container/Container";
import { Link } from "react-router-dom";

const advertisement = [
  {
    name: " iPhone 15 Pro Max",
    img: banner1,
  },
  {
    name: " Samsung Galaxy Buds2",
    img: banner2,
  },
  {
    name: "Intel Core i9-13900K",
    img: banner3,
  },
];

const HeroBannerSlider = () => {
  return (
    <Container>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="h-full w-full mb-5"
      >
        {advertisement?.map(({ img, name }, idx) => (
          <SwiperSlide key={idx} className="h-full w-full  ">
            <div className="flex md:justify-between justify-center md:gap-0 gap-2 md:pt-0 pt-5  md:flex-row flex-col items-center h-full w-full ">
              <div
                className="w-full md:flex-1 flex justify-center items-center h-full flex-col "
                data-aos="zoom-in"
              >
                <h1 className="text-white text-lg  md:text-2xl italic mb-3">
                  Exclusive
                </h1>
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl  font-medium relative z-40">
                  {name}
                </h2>
                <div className="mt-7">
                  <Link to="/allProduct">
                    <Button className="text-white">By Now</Button>
                  </Link>
                </div>
              </div>
              <div className="w-full md:flex-1 justify-center md:justify-start flex items-center  h-full">
                <img className="md:h-[500px] md:w-[400px]" src={img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default HeroBannerSlider;
