import { Helmet } from "react-helmet-async"
import HeroBannerSlider from "./heroBannerSlider/HeroBannerSlider"


const Home = () => {
  return (
    <>
      <Helmet>
        <title>GadgetGrid | Home</title>
      </Helmet>
      <section className="mt-[135px] backdrop-blur-sm  bg-white relative after:absolute after:h-full after:top-0 after:right-0 after:w-1/2 after:bg-primary/20">
        <HeroBannerSlider></HeroBannerSlider>
      </section>
    </>
  )
}

export default Home