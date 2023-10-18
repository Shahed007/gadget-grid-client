import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/home/Home"
import SignIn from "../pages/sigIn-signUp/SignIn"
import SignUp from "../pages/sigIn-signUp/SignUp"


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ]
  }
])

export default router