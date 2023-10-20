import PropTypes from 'prop-types';
import BrandCard from '../../components/card/BrandCard';
const BrandSection = ({loaderBrand}) => {
  return (
    <div className="max-w-7xl mx-auto px-3">
      <div className='text-center mb-12'>
        <h2 className='font-extrabold text-3xl mb-4 text-web-dark'>Brand</h2>
        <p className='text-lg text-web-dark/80'>Discover a diverse range of brands, offering quality products, all under one roof at home.</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            loaderBrand?.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
          }
      </div>
    </div>
  )
}

BrandSection.propTypes = {
  loaderBrand: PropTypes.array.isRequired,
}

export default BrandSection