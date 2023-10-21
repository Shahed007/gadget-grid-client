import { Helmet } from "react-helmet-async"
import HeroBannerSlider from "./heroBannerSlider/HeroBannerSlider"
import BrandSection from "../brandSection/BrandSection"
import { useLoaderData } from "react-router-dom"
import AboutUsSection from "./aboutUsSection/AboutUsSection"
import Customer from "../customer/Customer";
import banner from "../../assets/banner-image/sigin-login-banner.jpg";


const Home = () => {
  const loaderBrand = useLoaderData();
  return (
    <>
      <Helmet>
        <title>GadgetGrid | Home</title>
      </Helmet>
      <section className="mt-[135px] backdrop-blur-sm  bg-white relative after:absolute after:h-full after:top-0 after:right-0 after:w-1/2 after:bg-primary/20">
        <HeroBannerSlider></HeroBannerSlider>
      </section>
      <section className="my-32">
        <BrandSection loaderBrand={loaderBrand}></BrandSection>
      </section>
      <section className="mb-32">
        <AboutUsSection></AboutUsSection>
      </section>
      <section  style={{backgroundImage: `url(${banner})`, backgroundSize:'cover', backgroundPosition: 'center center'}}>
        <Customer></Customer>
      </section>
    </>
  )
}

export default Home