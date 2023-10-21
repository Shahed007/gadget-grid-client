import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/home/Home"
import SignIn from "../pages/sigIn-signUp/SignIn"
import SignUp from "../pages/sigIn-signUp/SignUp"
import AddProducts from "../pages/addProducts/AddProducts"
import ProductDetails from "../pages/productDetails/ProductDetails"
import Product from "../pages/product/Product"
import UpdateProduct from "../pages/updateProduct/UpdateProduct"
import Cart from "../pages/cart/Cart"


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async()=>{
          return fetch('https://gadget-grid-server.vercel.app/brand');
        }
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/addProducts',
        element: <AddProducts></AddProducts>,
        loader: async()=> {
          return fetch('https://gadget-grid-server.vercel.app/products')
        }
      },
      {
        path: '/product/:brandName',
        element: <Product></Product>,
        loader: async({params})=>{
          return fetch(`https://gadget-grid-server.vercel.app/products/${params.brandName}`)
        }
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: async({params})=>{
          return fetch(`https://gadget-grid-server.vercel.app/product/${params.id}`)
        }
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: async({params})=>{
          return fetch(`https://gadget-grid-server.vercel.app/product/${params.id}`)
        }
      },
      {
        path: '/cart/:uId',
        element: <Cart></Cart>,
        loader: async({params})=>{
          return fetch(`https://gadget-grid-server.vercel.app/cart/${params.uId}`);
        }
      }
    ]
  }
])

export default router