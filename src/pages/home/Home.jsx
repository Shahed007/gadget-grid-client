import { Helmet } from "react-helmet-async"
import HeroBannerSlider from "./heroBannerSlider/HeroBannerSlider"
import BrandSection from "../brandSection/BrandSection"
import { useLoaderData } from "react-router-dom"
import AboutUsSection from "./aboutUsSection/AboutUsSection"


const Home = () => {
  const loaderBrand = useLoaderData();
  return (
    <>
      <Helmet>
        <title>TecWanders | Home</title>
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
    </>
  )
}

export default Home