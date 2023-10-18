import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"


const MainLayout = () => {
  return (
    <div className="relative overflow-x-hidden bg-bgColor min-h-screen">
    <header className=" absolute top-0 w-full">
      <Navbar></Navbar>
    </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default MainLayout