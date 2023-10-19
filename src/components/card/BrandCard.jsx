import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({brand}) => {
  const {brand_name, brand_image} = brand;
  return (
    <Link>
      <div className='flex justify-center items-center flex-col gap-4 duration-200 rounded hover:shadow-md hover:backdrop-blur-md hover:bg-secondary/10 p-3'>
        <img className='h-20' src={brand_image} alt={`iamge of ${brand_name}`} />
        <h3 className='text-base font-semibold'>{brand_name}</h3>
      </div>
    </Link>
  )
}

BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
}

export default BrandCard