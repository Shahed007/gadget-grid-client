
import { Link } from "react-router-dom";
import banner from "../../assets/banner-image/sigin-login-banner.jpg";


const SignIn = () => {
  const handleSignIn = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
  }
  return (
    <section className=" mt-[135px]" style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
      <div className="md:max-w-3xl w-full  mx-auto px-3 py-12 ">
      <div className="relative flex flex-col  rounded-xl  bg-clip-border backdrop-blur-md bg-primary/30 text-white shadow-none p-4">
  <h4 className="block text-center font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    Sign In 
  </h4>
  <p className="mt-1 text-center text-white block font-sans text-base font-normal leading-relaxed  antialiased">
    Enter your details to SignIn.
  </p>
  <form autoComplete="off" onSubmit={handleSignIn} className="mt-8 mb-2 w-full  ">
    <div className="mb-4 flex flex-col gap-6">
      
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          type="text"
          className="peer h-full bg-transparent w-full rounded-md border border-secondary/50 border-t-transparent  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-secondary/50 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          name="email"
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-secondary transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-secondary peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-secondary/50 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-secondary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-secondary/50 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          type="password"
          className="peer h-full w-full rounded-md border border-secondary/50 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-secondary/50 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          name="password"
        />
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-secondary transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-secondary peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-secondary/50 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-secondary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-secondary/50 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>
      </div>
    </div>
    <div className="shadow-md active:scale-95 rounded-md bg-transparent shadow-slate-800/40 inline-block h-full w-full">
        <button type="submit"  className={`px-10 py-3 w-full bg-transparent buttonAnimation text-shadow drop-shadow-md font-semibold text-lg rounded-md border-t-2 border-t-secondary border-l-2 border-l-secondary border-r-2 border-r-primary border-b-2 border-b-primary duration-200 hover:border-t-primary hover:border-b-secondary hover:border-l-primary hover:border-r-secondary `}>SignIn</button>
      </div>
    <p className="mt-4 block text-center  text-base  leading-relaxed text-web-dark antialiased">
      No account? <Link
        className="font-medium text-white transition-colors hover:text-blue-700"
        to="/signUp"
      >
        Sign Up
      </Link>
    </p>
  </form>
</div>
      </div>
    </section>
  )
}

export default SignIn