import aboutBanner from "../../../assets/banner-image/mack-book.jpg";
import Button from "../../../components/button/Button";
const AboutUsSection = () => {
  return (
    <div >
      <h2 className="mb-8 text-web-dark font-semibold text-3xl text-center">About Us</h2>
    <div className="max-w-7xl mx-auto px-3  flex flex-col md:flex-row gap-6 items-center ">
      <div className="flex-1" data-aos="fade-right">
        <img className="h-full w-full rounded-lg" src={aboutBanner} alt="about us banner image" />
      </div>
      <div className="flex-1" data-aos="fade-left">
        <h3 className="text-2xl text-web-dark font-medium mb-3">About GadgetGrid</h3>
        <p className="text-base">At GadgetGrid, we're passionate about technology and innovation. Our mission is to bring you the latest and greatest in the world of gadgets, electronics, and tech wonders.</p>
        <h3 className="text-2xl text-web-dark font-medium mb-3 mt-5">Who We Are</h3>
        <p className="text-base">We are a team of tech enthusiasts, experts, and professionals dedicated to exploring the ever-evolving tech landscape. From smartphones and laptops to smartwatches and wireless earbuds, we're here to help you make informed choices in the fast-paced world of tech.s</p>
        <div className="mt-8 w-max">
          <Button text="Learn more" link="#"></Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUsSection