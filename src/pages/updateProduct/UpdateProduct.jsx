import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";


const UpdateProduct = () => {
  const loaderProductInfo = useLoaderData();
  const {_id} = loaderProductInfo;
  const handleUpdateProduct = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.productsName.value.toLowerCase();
    const companyName = form.brandName.value.toLowerCase();
    const imageUrl = form.image.value.toLowerCase();
    const categoryName = form.typeOfProducts.value.toLowerCase();
    const price = form.price.value.toLowerCase();
    const ratting = form.ratting.value.toLowerCase();
    const description = form.description.value.toLowerCase();
    const specification = form.specification.value.toLowerCase();

    const products = {
      brandName: companyName,
      image: imageUrl,
      typeOfProducts: categoryName,
      productsName: name,
      price,
      ratting,
      description,
      specification
    }

    fetch(`https://gadget-grid-server.vercel.app/products/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(products)
    })
    .then(res => res.json())
    .then(data => {
      if(data.matchedCount){
        Swal.fire({
          title: 'Success',
          text: 'Product update successful',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  
  }
  return (
    <section className="mt-[200px] mb-32">
    <div className="max-w-6xl mx-auto px-3 backdrop-blur-md bg-primary/30 p-4 rounded">
    <h2 className="text-3xl font-extrabold text-center mb-7">Update Products</h2>
    <form onSubmit={handleUpdateProduct} className="" > 
     <div className="flex items-center gap-6 md:flex-row flex-col">
     <div className="w-full flex-1 flex flex-col gap-4">
      <div className="flex flex-col gap-3 w-full">
         <label  className="text-base font-semibold">Name</label>
          <input defaultValue={loaderProductInfo.products[0]} required name="productsName" className="p-2 w-full rounded" type="text" placeholder="Enter products name" />
      </div>
      <div className="flex flex-col gap-3 w-full">
         <label htmlFor="brandName" className="text-base font-semibold">Brand Name</label>
          <input defaultValue={loaderProductInfo.brandName} required name="brandName" id="" className="p-2 w-full rounded" type="text" placeholder="Enter brand names" />
      </div>
      <div className="flex flex-col gap-3 w-full">
         <label htmlFor="image" className="text-base font-semibold">Image</label>
          <input defaultValue={loaderProductInfo.image} required id="image" name="image" className="p-2 w-full rounded" type="text" placeholder="Enter image url" />
      </div>

      

     </div>
     
     <div className="w-full flex-1 flex flex-col gap-4">
      <div className="flex flex-col gap-3 w-full">
         <label htmlFor="typeOfProducts" className="text-base font-semibold">Types of products</label>
          <input defaultValue={loaderProductInfo.category} required name="typeOfProducts" className="p-2 w-full rounded" type="text" placeholder="Enter types of products" />
      </div>
      <div className="flex flex-col gap-3 w-full">
         <label  className="text-base font-semibold">Price</label>
          <input defaultValue={loaderProductInfo.products[1]} required name="price" className="p-2 w-full rounded" type="text" placeholder="Enter price" />
      </div>
      <div className="flex flex-col gap-3 w-full">
         <label htmlFor="rating" className="text-base font-semibold">Rating</label>
          <input defaultValue={loaderProductInfo.products[2]} required name="ratting" id="rating" className="p-2 w-full rounded" type="text" placeholder="Enter rating" />
      </div>

     </div>
     
     </div>
     <div className="flex flex-col gap-3 w-full mt-4">
         <label htmlFor="description" className="text-base font-semibold">Short Description</label>
          <textarea defaultValue={loaderProductInfo.products[3]}  required name="description" id="" cols="" rows="" placeholder="Enter product description" className="w-full rounded h-20 p-2 overflow-hidden"></textarea>
      </div>
     <div className="flex flex-col gap-3 w-full mt-4">
         <label htmlFor="specification" className="text-base font-semibold">Product specification</label>
         <p className="text-sm text-red-400">After writing one specification, full stop mast should be useds</p>
          <textarea defaultValue={loaderProductInfo.specification} required  name="specification" id="" cols="" rows="" placeholder="Enter product specification" className="w-full rounded h-20 overflow-y-auto p-2"></textarea>
      </div>
      <div className="flex w-full mt-7">
        <input className="px-10 py-3 w-full active:scale-95 bg-transparent buttonAnimation text-shadow drop-shadow-md font-semibold text-lg rounded-md border-t-2 border-t-secondary border-l-2 border-l-secondary border-r-2 border-r-primary border-b-2 border-b-primary duration-200 hover:border-t-primary hover:border-b-secondary hover:border-l-primary hover:border-r-secondary" type="submit" value="Update product" />
      </div>
    </form>
    </div>
  </section>
  )
}

export default UpdateProduct