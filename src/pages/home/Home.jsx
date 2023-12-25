import { Helmet } from "react-helmet-async";
import HeroBannerSlider from "./heroBannerSlider/HeroBannerSlider";
import BrandSection from "../brandSection/BrandSection";
import { useLoaderData } from "react-router-dom";
import AboutUsSection from "./aboutUsSection/AboutUsSection";
import Customer from "../customer/Customer";
import banner from "../../assets/banner-image/sigin-login-banner.jpg";
import { animateScroll } from "react-scroll";

const Home = () => {
  const loaderBrand = useLoaderData();
  const scrollTop = () => {
    animateScroll.scrollToTop();
    console.log(animateScroll);
  };

  return (
    <>
      <Helmet>
        <title>GadgetGrid | Home</title>
      </Helmet>
      <section className=" bg-black">
        <HeroBannerSlider></HeroBannerSlider>
      </section>
      <section className="my-32 dark:bg-web-dark">
        <BrandSection loaderBrand={loaderBrand}></BrandSection>
      </section>
      <section className="mb-32">
        <AboutUsSection></AboutUsSection>
      </section>
      <section
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Customer></Customer>
      </section>
      <div className="fixed bottom-5 right-5" onClick={scrollTop}>
        <button className="h-9 w-9 text-white shadow-md flex justify-center items-center active:scale-95 rounded-full bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Home;
