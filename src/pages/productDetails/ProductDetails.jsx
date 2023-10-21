import { useLoaderData, useNavigation } from "react-router-dom"
import Button from "../../components/button/Button";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";




const ProductDetails = () => {
  const {userUid} = useAuthContext();
  const loaderSingleProduct = useLoaderData();
  const {brandName, image, category, products, specification} = loaderSingleProduct || {};
  const navigation = useNavigation();
  console.log(navigation);

 
    const handleAddToCart = () =>  {
      const cart = {
        userUid,
        brandName,
        image,
        category,
        products,
        specification
      }
      fetch('https://gadget-grid-server.vercel.app/cart', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cart)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          Swal.fire({
            title: 'Success',
            text: 'Product added to cart successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }else{
          Swal.fire({
            title: 'Warning!',
            text: data.error,
            icon: 'warning',
            confirmButtonText: 'OK'
          })
        }
        console.log(data);
      })
    }
  
  return (
   
    <>
      {
        navigation.state === 'loading' ? 
        <div className="h-screen w-full"><span className="loading loading-ring loading-lg"></span></div>
        :
        <section className="mt-[135px] ">
          <div className="backdrop-blur-sm  bg-white relative after:absolute after:h-full after:top-0 after:right-0 after:w-1/2 after:bg-primary/20">
          <div className="max-w-7xl md:flex-row flex items-center flex-col gap-7 mx-auto px-3 py-12">
                <div className="flex-1 z-20">
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
                <div className="flex-1 w-full h-full flex flex-col gap-6 z-20">
                  <img className="h-full w-full" src={image} alt={`image of ${products[0]}`} />
                    <div className="flex items-center gap-4 w-full  ">
                      <div className="flex-1">
                        <Button func={handleAddToCart} text="Add to product" className="w-full" ></Button>
                      </div>
                    </div>
                </div>
            </div>
          </div>
    </section>
      }
    </>
  )
}

export default ProductDetails