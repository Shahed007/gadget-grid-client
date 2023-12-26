import Container from "../../../components/container/Container";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/card/ProductCard";

const NewArivals = () => {
  const [newProduct, setNewProduct] = useState([]);
  useEffect(() => {
    const fetchDate = async () => {
      try {
        const res = await fetch(
          "https://gadget-grid-server.vercel.app/products"
        );
        const data = await res.json();
        setNewProduct(data.reverse().slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };
    fetchDate();
  }, []);
  return (
    <div>
      <Container>
        <div className="text-center mb-12">
          <h1 className="capitalize text-3xl font-semibold text-center">
            NEW ARRIVALS
          </h1>
          <p className="mt-4">Find your best Gadget hear</p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {newProduct?.map((item) => (
            <SwiperSlide key={item._id} className="mb-10">
              <ProductCard prod={item}></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default NewArivals;
