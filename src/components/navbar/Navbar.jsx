import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/headphones.png";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";
import Container from "../container/Container";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [userToggle, setUserToggle] = useState(false);
  const { user, signOutUser } = useAuthContext();
  const [darkMode, setDarkMode] = useState("light");
  const [navbarFix, setNavbarFixed] = useState(false);

  const handleChangeMod = () => {
    const html = document.documentElement;
    if (darkMode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setDarkMode("dark");
      localStorage.setItem("mod", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setDarkMode("light");
      localStorage.setItem("mod", "light");
    }
  };

  useEffect(() => {
    const mod = localStorage.getItem("mod") || "light";
    const html = document.documentElement;
    html.classList.add(mod);
    setDarkMode(mod);
    document.documentElement.classList.add(mod);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    signOutUser();
    Swal.fire({
      title: "Success",
      text: "SignOut successful",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };
  const desktoplinks = (
    <>
      <li className="flex group link-border flex-col gap-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "h-full w-full  duration-300  main-nav-active"
              : "h-full w-full  duration-300  main-nav-link "
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="flex group link-border flex-col gap-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "h-full w-full  duration-300  main-nav-active"
              : "h-full w-full  duration-300  main-nav-link "
          }
          to="/allProduct"
        >
          All Products
        </NavLink>
      </li>
      <li className="flex group link-border flex-col gap-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "h-full w-full  duration-300  main-nav-active"
              : "h-full w-full  duration-300  main-nav-link "
          }
          to="/addProducts"
        >
          Add Product
        </NavLink>
      </li>
      <li className="flex group link-border flex-col gap-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "h-full w-full  duration-300  main-nav-active"
              : "h-full w-full  duration-300  main-nav-link "
          }
          to="/about"
        >
          About Us
        </NavLink>
      </li>
      <li className="flex group link-border flex-col gap-0">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "h-full w-full  duration-300  main-nav-active"
              : "h-full w-full  duration-300  main-nav-link "
          }
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  const mobileLinks = (
    <>
      <li className="flex group link-border flex-col gap-0">
        <NavLink
          className="h-full w-full  duration-300  inline-block relative bg-gradient-to-l to-primary from-transparent text-transparent bg-clip-text"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="flex group link-border flex-col gap-0">
        <NavLink
          className="h-full w-full  duration-300  inline-block"
          to="/allProduct"
        >
          All Products
        </NavLink>
      </li>
      <li className="flex group link-border flex-col gap-0">
        <NavLink
          className="h-full w-full  duration-300  inline-block"
          to="/addProducts"
        >
          Add Product
        </NavLink>
      </li>
      <li className="flex group link-border flex-col gap-0">
        <NavLink
          className="h-full w-full  duration-300  inline-block"
          to="/about"
        >
          About Us
        </NavLink>
      </li>
      <li className="flex group link-border flex-col gap-0">
        <NavLink
          className="h-full w-full  duration-300  inline-block"
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <nav
        className={`z-50 relative w-full h-16  dark:bg-web-dark dark:text-white  backdrop-blur-lg bg-white   ${
          navbarFix ? "fixed top-0 left-0 w-full" : ""
        }`}
      >
        <Container>
          <div className="flex h-full max-w-7xl mx-auto px-3 justify-between items-center">
            <Link
              to="/"
              className="text-3xl  bg-primary  bg-clip-text text-transparent"
            >
              GadGetGrid
            </Link>
            <ul className="hidden dark:text-white  md:flex text-web-dark main-nav items-center gap-5 text-base font-medium">
              {desktoplinks}
            </ul>
            <button
              onClick={() => setNavToggle(!navToggle)}
              className="md:hidden dark:text-white inline-block"
            >
              {navToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 dark:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 dark:text-white text-web-dark"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>

            <div className="md:flex hidden gap-4 items-center">
              <div
                className={`h-10 w-20 p-[4px] hidden  relative rounded-3xl bg-gray-100 shadow-inner border-s-2 border-gray-300 dark:border-gray-600 border lg:flex justify-between items-center dark:bg-zinc-900`}
              >
                <span
                  onClick={handleChangeMod}
                  className="text-[12px] font-medium cursor-pointer"
                >
                  Light
                </span>
                <span
                  onClick={handleChangeMod}
                  className="text-[12px] font-medium cursor-pointer"
                >
                  Dark
                </span>
                <button
                  className={`h-7 w-7 rounded-full z-30  absolute flex justify-center items-center ${
                    darkMode === "dark"
                      ? "right-[4px] bg-dark-mode/30 backdrop-blur shadow shadow-white"
                      : "left-[4px] bg-gray-200 shadow shadow-web-dark/10"
                  }`}
                >
                  {darkMode === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-6 h-6 dark:text-white dark:bg-zinc-900 rounded-full`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-5 h-5 `}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="md:flex hidden active:scale-95 text-lg font-medium relative flex-col gap-0">
                <Link
                  className="h-full w-full text-web-dark duration-300   inline-block"
                  to={`/cart`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </Link>
              </div>
              <div className="">
                {user ? (
                  <div>
                    <div>
                      <img
                        onClick={() => setUserToggle(!userToggle)}
                        className="h-12 w-12 cursor-pointer hover:scale-95 active:scale-90 object-cover rounded-full shadow-md shadow-primary/40 buttonAnimation border-t-2  border-t-secondary border-l-2 border-l-secondary border-r-2 border-r-primary border-b-2 border-b-primary duration-200 hover:border-t-primary hover:border-b-secondary hover:border-l-primary hover:border-r-secondary"
                        src={user?.photoURL}
                        alt={`avatar`}
                      />
                    </div>
                    <div>
                      <ul
                        className={`absolute top-20 space-y-3 dark:bg-zinc-800 w-1/2 sm:w-1/4 backdrop-blur-md bg-primary/50 p-2 right-0 duration-500 ${
                          userToggle
                            ? "translate-x-0 scale-100"
                            : "translate-x-full scale-0"
                        }`}
                      >
                        <li>
                          <h3 className="text-lg font-semibold text-web-dark text-center">
                            {user?.displayName}
                          </h3>
                        </li>
                        <li>
                          <div
                            className={`h-10 w-20 p-[4px] relative rounded-3xl bg-gray-100 shadow-inner border-s-2 border-gray-300 dark:border-gray-600 border flex lg:hidden justify-between items-center dark:bg-zinc-900`}
                          >
                            <span
                              onClick={handleChangeMod}
                              className="text-[12px] font-medium cursor-pointer"
                            >
                              Light
                            </span>
                            <span
                              onClick={handleChangeMod}
                              className="text-[12px] font-medium cursor-pointer"
                            >
                              Dark
                            </span>
                            <button
                              className={`h-7 w-7 rounded-full z-30  absolute flex justify-center items-center ${
                                darkMode === "dark"
                                  ? "right-[4px] bg-dark-mode/30 backdrop-blur shadow shadow-white"
                                  : "left-[4px] bg-gray-200 shadow shadow-web-dark/10"
                              }`}
                            >
                              {darkMode === "dark" ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className={`w-6 h-6 dark:text-white dark:bg-zinc-900 rounded-full`}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className={`w-5 h-5 `}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                  />
                                </svg>
                              )}
                            </button>
                          </div>
                        </li>
                        <li className="text-white text-base">
                          <Link className="duration-200 hover:text-blue-200">
                            Update your profile
                          </Link>
                        </li>
                        <li>
                          <Button
                            onClick={handleSignOut}
                            className="text-white w-full"
                          >
                            Sign Out
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Link to="/signIn">
                      <Button className={`${navbarFix ? "text-primary" : ""} `}>
                        Sign In
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </nav>
      <div
        className={`absolute  top-16 w-60 h-screen p-4 dark:bg-dark-mode bg-white z-[120] ${
          navToggle
            ? "left-0 duration-200 ease-in-out"
            : "-left-full duration-200 ease-in-out"
        }`}
      >
        <div className="justify-between items-center mb-3 flex">
          <Link
            className="h-full w-full text-web-dark duration-300 flex-1   inline-block"
            to={`/cart`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
          <div
            className={`h-10 w-20 p-[4px] flex-1 relative rounded-3xl bg-gray-100 shadow-inner border-s-2 border-gray-300 dark:border-gray-600 border flex  justify-between items-center dark:bg-zinc-900`}
          >
            <span
              onClick={handleChangeMod}
              className="text-[12px] font-medium cursor-pointer"
            >
              Light
            </span>
            <span
              onClick={handleChangeMod}
              className="text-[12px] font-medium cursor-pointer"
            >
              Dark
            </span>
            <button
              className={`h-7 w-7 rounded-full z-30  absolute flex justify-center items-center ${
                darkMode === "dark"
                  ? "right-[4px] bg-dark-mode/30 backdrop-blur shadow shadow-white"
                  : "left-[4px] bg-gray-200 shadow shadow-web-dark/10"
              }`}
            >
              {darkMode === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 dark:text-white dark:bg-zinc-900 rounded-full`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <ul className="space-y-3 dark:text-white">
          {mobileLinks}
          <li className=" relative">
            <Link to="/" className="flex  gap-1 items-center">
              <img
                className="h-12 w-12 cursor-pointer hover:scale-95 active:scale-90 object-cover rounded-full shadow-md shadow-primary/40 buttonAnimation border-t-2  border-t-secondary border-l-2 border-l-secondary border-r-2 border-r-primary border-b-2 border-b-primary duration-200 hover:border-t-primary hover:border-b-secondary hover:border-l-primary hover:border-r-secondary"
                src={user?.photoURL}
                alt={`avatar`}
              />
              <h2 className="text-lg font-medium">{user?.displayName}</h2>
            </Link>
          </li>
          <li>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
