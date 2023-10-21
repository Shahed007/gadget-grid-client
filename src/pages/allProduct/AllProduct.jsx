import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom"
import ProductCard from "../../components/card/ProductCard";
import { Helmet } from "react-helmet-async";



const AllProduct = () => {
  const loaderProducts = useLoaderData();
  const navigation = useNavigation();
  const [seeAll, setSeeAll] = useState(false);
  return (
    <>
      <Helmet>
        <title>GadgetGrid | AllProduct</title>
      </Helmet>
      <section className="mt-[135px] mb-32">
      {
        navigation.state === 'loading' ? 
        <div className="h-screen w-full flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
        </div>
        :
        <>
        <div className="bg-gradient-to-l h-40 flex justify-center items-center backdrop-blur-lg  from-primary/30 to-secondary/30 w-full">
        <h2 className="text-center py-6  text-web-dark font-extrabold text-4xl uppercase">All Products</h2>
         </div>
        <div className="max-w-7xl mx-auto px-3 pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {
            seeAll ? 
            loaderProducts?.map(item => <ProductCard key={item._id} prod={item}></ProductCard>)
            :
            loaderProducts?.slice(0,6).map(item => <ProductCard key={item._id} prod={item}></ProductCard>)
          }
        </div>

        <div className="max-w-7xl mx-auto px-3 mt-8 flex justify-center items-center">
          <div>
           <button className="px-10 py-3 bg-transparent buttonAnimation text-shadow drop-shadow-md font-semibold text-lg rounded-md border-t-2 border-t-secondary border-l-2 border-l-secondary border-r-2 border-r-primary border-b-2 border-b-primary duration-200 hover:border-t-primary hover:border-b-secondary hover:border-l-primary hover:border-r-secondary active:scale-95" onClick={()=> setSeeAll(!seeAll)}>
            {
              seeAll ? 'See Less' : 'See All'
            }
           </button>
          </div>
        </div>
        </>
      }
    </section>
    </>
  )
}

export default AllProduct