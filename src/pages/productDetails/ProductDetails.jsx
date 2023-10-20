import { useLoaderData } from "react-router-dom"
import Button from "../../components/button/Button";


const ProductDetails = () => {
  const loaderSingleProduct = useLoaderData();
  const {_id,brandName, image, products, specification} = loaderSingleProduct || {};
  return (
    <section className="mt-[135px] backdrop-blur-sm  bg-white relative after:absolute after:h-full after:top-0 after:right-0 after:w-1/2 after:bg-primary/20">
      <div className="max-w-7xl md:flex-row flex items-center flex-col gap-7 mx-auto px-3 py-12">
          <div className="flex-1">
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
          <div className="flex-1 w-full h-full flex flex-col gap-6">
            <img className="h-full w-full" src={image} alt={`image of ${products[0]}`} />
              <div className="flex items-center gap-4 w-full  lg:flex-row flex-col">
                <div className="flex-1">
                  <Button link="#" text="Add to cart" className="w-full"></Button>
                </div>
                <div className="flex-1">
                <Button link="#" text="Update product" className="w-full md:text-lg text-base md:px-10 px-4 md:py-3 py-2"></Button>
                </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default ProductDetails