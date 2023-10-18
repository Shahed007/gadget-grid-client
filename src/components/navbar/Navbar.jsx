import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/headphones.png";
import Button from "../button/Button";
import { useState } from "react";



const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const links = (
    <>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full text-web-dark duration-300 hover:text-primary  inline-block" to="/">Home</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </li>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full text-web-dark duration-300 hover:text-primary  inline-block" to="/products">Products</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </li>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full text-web-dark duration-300 hover:text-primary  inline-block" to="/aboutUs">About Us</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </li>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full text-web-dark duration-300 hover:text-primary  inline-block" to="/contactUs">Add Product</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </li>
    </>
  )
  return (
    <nav className="relative">
      <div className="backdrop-blur-lg bg-primary/20  h-14">
      <div className="flex justify-center sm:justify-between max-w-7xl px-3 mx-auto items-center">
      <Link to="/" className="flex gap-3 items-center mt-1">
      <img src={logo}  className="h-10 " alt="Gadget Grid" />
      <div >
        <h1 className="text-web-dark font-extrabold ml-8 text-xl  text-shadow">GadgetGrid</h1>
        <p className="text-emerald-400 text-shadow2 ">Connecting the World of Gadgets</p>
      </div>
      </Link>
      <p className="sm:flex hidden main-nav text-lg font-bold group link-border flex-col gap-0"><NavLink className="h-full w-full text-web-dark duration-300 hover:text-primary  inline-block" to="/contactUs">Contact Us</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </p>
      </div>
      </div>
      <div className="h-20  backdrop-blur-lg bg-primary/20">
      <div className="flex h-full max-w-7xl mx-auto px-3 justify-between items-center">
        
      
      <ul className="hidden md:flex main-nav items-center gap-5 text-lg font-medium">
        {links}
      </ul>
      <button onClick={()=> setNavToggle(!navToggle)} className="md:hidden inline-block">
       {
         navToggle ? 
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
          :
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-web-dark">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
       }
      </button>
      <ul className={`absolute main-nav top-20 left-0 w-1/2 sm:w-1/4 h-screen backdrop-blur-lg space-y-5 font-semibold text-lg bg-primary/20 z-20 duration-500 p-4 ${navToggle ? 'translate-x-0 scale-100':'-translate-x-full scale-0'}`}>
        {links}
      </ul>
      <div className="flex gap-4 items-center">  
      <p className="flex text-lg font-medium group main-nav link-border flex-col gap-0"><NavLink className="h-full w-full text-web-dark duration-300 hover:text-primary  inline-block" to="/contactUs">My Cart</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </p>
      <div>
      <Button text="SignIn" link="#"></Button>
      </div>
      </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar