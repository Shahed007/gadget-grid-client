import PropTypes from 'prop-types';
import Button from '../button/Button';

const ProductCard = ({prod}) => {
  const {_id, image, brandName, products} = prod;
  
  return (
    <div data-aos="fade-up" className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden flex justify-center items-center text-gray-700 backdrop-blur-md bg-gradient-to-b from-web-dark to-primary/30  h-96    rounded-xl bg-clip-border">
    <div className='w-60 h-52 flex justify-center items-center'>
    <img
      src={image}
      className="object-cover w-4/5 h-4/5 md:w-full md:h-full"
    />
    </div>
    <h4 className='text-white font-semibold text-2xl absolute left-3 top-3 first-letter:uppercase'>
      {brandName}
    </h4>
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans first-letter:capitalize text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {products[0]}
      </p>
      <div className='flex items-center gap-2'>
      <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star text-gray-800 h-4 w-4" checked onChange={()=>{}}/>
        <input type="radio" name="rating-1" className="mask mask-star text-gray-800 h-4 w-4" checked onChange={()=>{}} />
        <input type="radio" name="rating-1" className="mask mask-star text-gray-800 h-4 w-4" checked onChange={()=>{}}/>
        <input type="radio" name="rating-1" className="mask mask-star text-gray-800 h-4 w-4" checked onChange={()=>{}}/>
        <input type="radio" name="rating-1" className="mask mask-star text-gray-800 h-4 w-4" checked onChange={()=>{}}/>
      </div>
       <p >{products[2]}</p>
      </div>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        ${products[1]}
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      {products[3].slice(0, 110)}...
    </p>
  </div>
  <div className="p-6 pt-0">
    <Button text="Details" className="w-full" link={`/productDetails/${_id}`}></Button>
  </div>
  <div className="p-6 pt-0">
    <Button text="Update product" className="w-full" link={`/updateProduct/${_id}`}></Button>
  </div>
</div>
  )
}

ProductCard.propTypes = {
  prod: PropTypes.object.isRequired,
}

export default ProductCard