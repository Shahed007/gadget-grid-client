
import { Link } from 'react-router-dom'
import visa from "../../assets/icon/visa.png";
import master from "../../assets/icon/card.png";
import american from "../../assets/icon/american-express.png";
import bikash  from "../../assets/icon/bikas.png";
import {FaFacebook, FaYoutube} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto px-3 '>
      <Link className='text-3xl font-bold text-white/70 tracking-wider' to="/">GadgetGrid</Link>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-12 '>
        <div className='col-span-4 md:col-span-2 w-full '>
          <p className='text-white/70 flex gap-3'>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
          </svg>
          </span> 
          <span>Discover the latest in tech and electronics. Your go-to source for gadget news, reviews, and expert insights. Stay connected with the tech world, one gadget at a time.</span></p>
          <div className='mt-4'>
          <h4 className='text-lg font-semibold text-white/70'>News Latter</h4>
          <div className="relative flex h-10 w-full min-w-[200px] mt-4">
          <input
            type="email"
            className="peer h-full w-full rounded-[7px] border border-primary  bg-transparent px-3 py-2.5 pr-20  text-sm font-normal text-white/70 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            required
          />
          <button
            className="absolute cursor-pointer right-1 top-1 z-20  rounded bg-pink-500 py-2 px-4 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none  peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            type="button"
          >
            Subscribe
          </button>
          <label className="before:content[' '] after:content[' '] text-white/70 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Email Address
          </label>
        </div>
          </div>
        </div>
        <div className='col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div>
          <h4 className='text-white/70 text-lg font-semibold'>About Us</h4>
          <ul className='mt-5 text-white/70 text-lg'>
            <li><Link className='duration-200 hover:text-white'>Our Story</Link></li>
            <li><Link className='duration-200 hover:text-white'>Meet the Team</Link></li>
            <li><Link className='duration-200 hover:text-white'>Blog</Link></li>
            <li><Link className='duration-200 hover:text-white'>Careers</Link></li>
            <li><Link className='duration-200 hover:text-white'>Sustainability</Link></li>
          </ul>
        </div>
        <div>
          <h4 className='text-white/70 text-lg font-semibold'>Customer Support</h4>
          <ul className='mt-5 text-white/70 text-lg'>
            <li><Link className='duration-200 hover:text-white'>Contact Us</Link></li>
            <li><Link className='duration-200 hover:text-white'>FAQ</Link></li>
            <li><Link className='duration-200 hover:text-white'>Returns & Refunds</Link></li>
            <li><Link className='duration-200 hover:text-white'>Shipping Information</Link></li>
            <li><Link className='duration-200 hover:text-white'>Privacy Policy</Link></li>
            <li><Link className='duration-200 hover:text-white'>Terms & Conditions</Link></li>
            <li> <Link className='duration-200 hover:text-white'>support@techwonders.com</Link></li>
          </ul>
        </div>
        <div>
          <h4 className='text-white/70 text-lg font-semibold'>Connect with Us</h4>
          <ul className='mt-5 text-white/70 text-lg'>
            <li><span className='font-semibold'>Email:</span> <Link className='duration-200 hover:text-white'>info@techwonders.com</Link></li>
            <li><span className='font-semibold'>Phone:</span> <Link className='duration-200 hover:text-white'>(123) 456-7890</Link></li>
            <li><span className='font-semibold'>Address:</span> <Link className='duration-200 hover:text-white'>1234 Innovation Avenue, Suite 567, Tech City, TX 12345</Link></li>
            
            <li><span className='font-semibold'>General Inquiries:</span> <Link className='duration-200 hover:text-white'>inquiries@techwonders.com</Link></li>
           
          </ul>
        </div>
        </div>
      </div>

      <div className='border-t border-white/40 mt-8 gap-4 flex flex-col md:flex-row items-center pt-2 justify-between'>
         <div>
         <h4 className='text-lg font-semibold text-white/70 md:text-start text-center'>Follow Us</h4>
          <ul className='flex gap-2 items-center text-2xl text-white/70 '>
            <li><Link className='duration-200 hover:text-white'><FaFacebook/></Link></li>
            <li><Link className='duration-200 hover:text-white'><AiFillTwitterCircle/></Link></li>
            <li><Link className='duration-200 hover:text-white'><FaYoutube/></Link></li>
          </ul>
         </div>
         <div className='md:text-start text-center'>
          <h4 className='text-lg font-semibold text-white/70'>Payment accepted</h4>
          <ul className='flex gap-3 items-center'>
            <li><img className='h-10 w-10' src={visa} alt="visa payment" /></li>
            <li><img className='h-10 w-10' src={master} alt="master payment" /></li>
            <li><img className='h-10 w-10' src={american} alt="american payment" /></li>
            <li><img className='h-10 w-10' src={bikash} alt="bikash payment" /></li>
          </ul>
         </div>
      </div>

      <div className='text-center text-base font-normal text-white/70 border-t border-white/40 mt-5 '>
        <p className='pt-2'>Copyright © 2023 - All right reserved by <span className='font-semibold'>TechWonders</span>.Developed by <span className='font-semibold'>MD Shahed</span></p>
      </div>
    </div>
  )
}

export default Footer