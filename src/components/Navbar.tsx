import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "./Header";
import { FaBookReader } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const auth = useAuth();
  // console.log(auth);
  const [nav, setNav] = useState(false);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = async () => {
    if (auth) {
      await auth.logout();
    }
  };

  const changedBackground = () => {
    if (window.scrollY >= 105) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changedBackground);

  return (
    <>
      <div className="">
        <Header />
      </div>
      <div
        className={
          nav
            ? "navs fixed top-0 left-0 right-0 z-10 transition-all bg-rose-500"
            : "bg-green-500"
        }
      >
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                onClick={handleClick}
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                {click ? (
                  "close"
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                )}
              </div>
              <ul
                tabIndex={0}
                className={
                  click
                    ? "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-400 dark:text-slate-400 h-screen"
                    : "dropdown-content right-96"
                }
              >
                <li>
                  <Link onClick={closeMobileMenu} to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMobileMenu} to={"/ssc"}>
                    SSC
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMobileMenu} to={"/hsc"}>
                    HSC
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMobileMenu} to={"/degree"}>
                    Degree
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMobileMenu} to={"/about"}>
                    About
                  </Link>
                </li>
                {!auth?.user && (
                  <>
                    <li>
                      <Link onClick={closeMobileMenu} to={"/login"}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link onClick={closeMobileMenu} to={"/register"}>
                        Register
                      </Link>
                    </li>
                  </>
                )}
                {auth?.user && (
                  <li>
                    <Link onClick={closeMobileMenu} to={"/dashboard"}>
                      Dashboard
                    </Link>
                  </li>
                )}
                {auth?.user && (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn bg-red-500 text-white"
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>
            <Link
              onClick={closeMobileMenu}
              to={"/"}
              className="btn btn-ghost text-xl"
            >
              <FaBookReader size={32} />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/ssc"}>SSC</Link>
              </li>
              <li>
                <Link to={"/hsc"}>HSC</Link>
              </li>
              <li>
                <Link to={"/degree"}>Degree</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              {!auth?.user && (
                <>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link to={"/register"}>Register</Link>
                  </li>
                </>
              )}
              {auth?.user && (
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end space-x-2">
            {auth?.user && (
              <button
                onClick={handleLogout}
                className="btn bg-red-500 text-white hidden lg:block"
              >
                Logout
              </button>
            )}
            <div className="avatar">
              <div className="w-12 rounded-full border-2 border-black">
                <img src={auth?.user?.photoURL || "/placeholder.jpg"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
