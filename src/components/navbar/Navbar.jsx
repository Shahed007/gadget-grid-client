import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/headphones.png";
import Button from "../button/Button";
import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";





const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [userToggle, setUserToggle] = useState(false);
  const {user, signOutUser,  userUid} = useAuthContext();



  const handleSignOut = () => {
    signOutUser()
  }
  const desktoplinks = (
    <>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full  duration-300 hover:text-primary  inline-block" to="/">Home</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </li>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full  duration-300 hover:text-primary  inline-block" to="/allProduct">All Products</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </li>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full  duration-300 hover:text-primary  inline-block" to="/addProducts">Add Product</NavLink>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </li>
    </>
  )
  const mobileLinks = (
    <>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full  duration-300  inline-block" to="/">Home</NavLink>
      
      </li>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full  duration-300  inline-block" to="/allProduct">All Products</NavLink>
      
      </li>
      <li className="flex group link-border flex-col gap-0"><NavLink className="h-full w-full  duration-300  inline-block" to="/addProducts">Add Product</NavLink>
      
      </li>
    </>
  )
  return (
    <nav className="relative z-50">
      <div className="backdrop-blur-lg bg-primary/20  h-14">
      <div className="flex justify-center sm:justify-between max-w-7xl px-3 mx-auto items-center">
      <Link to="/" className="flex gap-3 items-center mt-1">
      <img src={logo}  className="h-10 " alt="Gadget Grid" />
      <div >
        <h1 className="text-web-dark font-extrabold  text-xl  text-shadow"><span className="text-2xl text-primary">G</span>adgetGrid</h1>
      </div>
      </Link>
      <p className="sm:flex hidden  text-lg font-bold group link-border flex-col gap-0"><Link className="h-full w-full text-web-dark duration-300 hover:text-primary  inline-block" >Contact Us</Link>
      <span className="w-full  h-[2px] rounded-sm scale-0 duration-300 group-hover:scale-100 bg-primary inline-block"></span>
      </p>
      </div>
      </div>
      <div className="h-20  backdrop-blur-lg bg-primary/20">
      <div className="flex h-full max-w-7xl mx-auto px-3 justify-between items-center">
        
      
      <ul className="hidden md:flex text-web-dark main-nav items-center gap-5 text-lg font-medium">
        {desktoplinks}
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
      <ul className={`absolute text-web-dark  main-nav2 top-20 left-0 w-1/2 sm:w-1/4 h-[60vh] backdrop-blur-lg space-y-5 font-semibold text-lg bg-primary/80 z-30 duration-500 p-4 ${navToggle ? 'translate-x-0 scale-100':'-translate-x-full scale-0'}`}>
        {mobileLinks}
      </ul>
      <div className="flex gap-4 items-center">  
      <div className="flex active:scale-95 text-lg font-medium relative flex-col gap-0"><Link className="h-full w-full text-web-dark duration-300   inline-block" to={`/cart/${userUid}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      </Link>
      </div>
      <div>
        {
          user ?
          <div>
            <div>
              <img onClick={()=> setUserToggle(!userToggle)} className="h-12 w-12 cursor-pointer hover:scale-95 active:scale-90 object-cover rounded-full shadow-md shadow-primary/40 buttonAnimation border-t-2  border-t-secondary border-l-2 border-l-secondary border-r-2 border-r-primary border-b-2 border-b-primary duration-200 hover:border-t-primary hover:border-b-secondary hover:border-l-primary hover:border-r-secondary" src={user?.photoURL} alt={`avatar`} />
            </div>
            <div>
              <ul className={`absolute top-20 space-y-3 w-1/2 sm:w-1/4 backdrop-blur-md bg-primary/50 p-2 right-0 duration-500 ${userToggle ? 'translate-x-0 scale-100':'translate-x-full scale-0'}`}>
                <li><h3 className="text-lg font-semibold text-web-dark text-center">{user?.displayName}</h3></li>
                <li className="text-white text-base"><Link className="duration-200 hover:text-blue-200">Update your profile</Link></li>
                <li><Button func={handleSignOut} text="SignOut" className="text-white w-full"></Button></li>
              </ul>
            </div>
          </div>
          :
          <div>
          <Button text="SignIn" link="/signIn" ></Button>
          </div>
        }
      </div>
      </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar