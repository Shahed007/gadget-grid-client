import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"


const MainLayout = () => {
  return (
    <div className="relative overflow-x-hidden bg-bgColor dark:bg-web-dark">
    <header className=" absolute top-0 w-full">
      <Navbar></Navbar>
    </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="pt-20 pb-5 bg-[#10182F] ">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default MainLayout