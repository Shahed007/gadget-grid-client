import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/home/Home"
import SignIn from "../pages/sigIn-signUp/SignIn"
import SignUp from "../pages/sigIn-signUp/SignUp"
import AddProducts from "../pages/addProducts/AddProducts"


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
      }
    ]
  }
])

export default router