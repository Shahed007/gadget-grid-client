import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";
import { deleteLocalStorage } from "../../Utility/localStorage";
import useAuthContext from "../../hooks/useAuthContext";



const tableHeader = ['ID', 'Image', 'Name', 'Price']

const Cart = () => {
  const loaderCart = useLoaderData();
  const [loaderData, setLoaderData] = useState(loaderCart);
  const {setCount, count, userUid, loading} = useAuthContext();

  
  

  const handleDelete = (_id) => {
    fetch(`https://gadget-grid-server.vercel.app/cart/${_id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        const filterData = loaderData.filter(item => item._id !== _id);
        setLoaderData(filterData);
        setCount(count + 1);
        deleteLocalStorage(1);
        Swal.fire({
          title: 'Success',
          text: 'Item deleted successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

  const handleAllDelete = (uId) => {


      Swal.fire({
        title: 'Are you sure?',
        text: "To delete this",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://gadget-grid-server.vercel.app/clearCart/${uId}`, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your cart has been deleted.',
                'success'
              )
              setLoaderData([]);
            }
          })
        }
      })
  } 
  return (
    <>
      {
        loading ? 
        <div className="h-screen w-full flex justify-center items-center"></div>
        :
        <section className="mt-[135px] mb-32">
        <div className="bg-gradient-to-l h-40 flex justify-center items-center backdrop-blur-lg  from-primary/30 to-secondary/30 w-full">
         <h2 className="text-center py-6  text-web-dark font-extrabold text-4xl uppercase">Products In your cart</h2>
        </div>
        {
          loaderData.length === 0 ?
          <div className="h-screen flex justify-center items-center w-full text-center">
            <p className="text-2xl font-bold text-web-dark">Your cart has been empty</p>
          </div>
          :
          <div className="max-w-7xl px-3 mx-auto pt-12">
        <div className="overflow-x-auto">
        <table className="table w-full" >
          {/* head */}
          <thead className="border-b-2 border-gray-700">
            <tr className="text-lg text-web-dark">
              {
                tableHeader.map((item, idx) => <th key={idx}>{item}</th>)
              }
              <th onClick={()=> handleAllDelete(userUid)} className="flex gap-1 cursor-pointer items-center text-base font-semibold bg-red-400 w-max text-white rounded shadow active:scale-95">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              </span> 
              <span>
               Clear cart
              </span>
              </th>
            </tr>
          </thead>
          <tbody >
            {/* row 1 */}
            {
              loaderData?.map((cart, idx) => (
              <tr key={cart._id}>
              <th>{idx + 1}</th>
              <td><img className="h-16 w-[66px] drop-shadow" src={cart.image} alt={`image of ${cart.products[0]}`} /></td>
              <td className="first-letter:uppercase text-web-dark ">{cart.products[0]}</td>
              <td className="font-medium text-web-dark">$ {cart.products[1]}</td>
              <td >
              <div onClick={()=>handleDelete(cart._id)} className="inline-block cursor-pointer active:scale-95 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              </div>
              </td>
              </tr>
              ))
            }
            <tr>
              <td></td>
              <td className="w-max">
                
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
        <div className="mt-4 flex sm:flex-row flex-col sm:items-center sm:justify-between gap-3">
        <Link to="#" className="px-6 py-2 shadow-md flex items-center gap-1 w-max bg-white buttonAnimation text-shadow drop-shadow-md font-semibold text-lg rounded-md border-t-2 border-t-secondary border-l-2 border-l-secondary border-r-2 border-r-primary border-b-2 border-b-primary duration-200 hover:border-t-primary hover:border-b-secondary hover:border-l-primary hover:border-r-secondary active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          <span>Continue shopping</span>
        </Link>
        <Link to="#" className="px-6 py-2 shadow-md flex items-center gap-1 w-max bg-secondary/20 buttonAnimation text-shadow drop-shadow-md font-semibold text-lg rounded-md border-t-2 border-t-secondary border-l-2 border-l-secondary border-r-2 border-r-primary border-b-2 border-b-primary duration-200 hover:border-t-primary hover:border-b-secondary hover:border-l-primary hover:border-r-secondary active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>

          <span>Checkout</span>
        </Link>
        </div>
      </div>
        }
    </section>
      }
    </>
      
  )
}

export default Cart