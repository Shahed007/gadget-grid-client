import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/headphones.png";
import Button from "../button/Button";



const Navbar = () => {
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
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full  w-full text-web-dark duration-300 hover:text-primary  inline-block" to="/contactUs">Contact Us</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </li>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full text-web-dark duration-300 hover:text-primary  inline-block" to="/contactUs">Add Product</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </li>
    </>
  )
  return (
    <nav className="container mx-auto px-3 h-20 flex justify-between items-center">
      <Link to="/" className="flex gap-3 items-center">
      <img src={logo}  className="h-14 " alt="Gadget Grid" />
      <div >
        <h1 className="text-web-dark font-extrabold ml-4 text-3xl text-shadow">GadgetGrid</h1>
        <p className="text-emerald-400 text-shadow2">Connecting the World of Gadgets</p>
      </div>
      </Link>
      <ul className="flex main-nav items-center gap-5 text-lg font-medium">
        {links}
      </ul>
      <div>
      
      <Button text="SignIn" link="#"></Button>
   
      </div>
    </nav>
  )
}

export default Navbar