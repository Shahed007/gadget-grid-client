import { useLoaderData, useParams } from "react-router-dom"
import ProductCard from "../../components/card/ProductCard";


const Product = () => {
  const loaderProduct = useLoaderData();
  const brandName = useParams();
  return (
    <section className="mt-[135px] mb-32 bg-transparent">
    <div className="bg-gradient-to-l h-40 flex justify-center items-center backdrop-blur-lg  from-primary/30 to-secondary/30 w-full">
    <h2 className="text-center py-6  text-web-dark font-extrabold text-4xl uppercase">{brandName.brandName.toUpperCase()} Products</h2>
    </div>
      <div className="max-w-7xl mx-auto gap-6 px-3 pt-12 grid grid-cols-1 md:grid-cols-2">
        {
          loaderProduct?.map(prod => <ProductCard key={prod._id} prod={prod}></ProductCard>) 
        }
      </div>
    </section>
  )
}

export default Product