import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`flex lg:gap-6 justify-between w-full h-[60px] lg:h-[80px] ${isOpen ? "bg-white" : "bg-transparent"}`}>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-gray-400" : ""}`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 60"
              onClick={() => setIsOpen(false)}
              className={`h-[40px] mt-2 w-auto fill-current transition-colors duration-500 lg:mt-5.5 hover:cursor-pointer lg:pl-4 xl:pl-30 2xl:pl-80
              ${isOpen ? "text-[#635BFF]" : "text-white"}
              ${isOpen ? "hover:text-[#635bff]" : "hover:text-[#687A8B]"}`}
            >
              <path d="M101.547 30.94c0-5.885-2.85-10.53-8.3-10.53-5.47 0-8.782 4.644-8.782 10.483 0 6.92 3.908 10.414 9.517 10.414 2.736 0 4.805-.62 6.368-1.494v-4.598c-1.563.782-3.356 1.264-5.632 1.264-2.23 0-4.207-.782-4.46-3.494h11.24c0-.3.046-1.494.046-2.046zM90.2 28.757c0-2.598 1.586-3.678 3.035-3.678 1.402 0 2.897 1.08 2.897 3.678zm-14.597-8.345c-2.253 0-3.7 1.057-4.506 1.793l-.3-1.425H65.73v26.805l5.747-1.218.023-6.506c.828.598 2.046 1.448 4.07 1.448 4.115 0 7.862-3.3 7.862-10.598-.023-6.667-3.816-10.3-7.84-10.3zm-1.38 15.84c-1.356 0-2.16-.483-2.713-1.08l-.023-8.53c.598-.667 1.425-1.126 2.736-1.126 2.092 0 3.54 2.345 3.54 5.356 0 3.08-1.425 5.38-3.54 5.38zm-16.4-17.196l5.77-1.24V13.15l-5.77 1.218zm0 1.747h5.77v20.115h-5.77zm-6.185 1.7l-.368-1.7h-4.966V40.92h5.747V27.286c1.356-1.77 3.655-1.448 4.368-1.195v-5.287c-.736-.276-3.425-.782-4.782 1.7zm-11.494-6.7L34.535 17l-.023 18.414c0 3.402 2.552 5.908 5.954 5.908 1.885 0 3.264-.345 4.023-.76v-4.667c-.736.3-4.368 1.356-4.368-2.046V25.7h4.368v-4.897h-4.37zm-15.54 10.828c0-.897.736-1.24 1.954-1.24a12.85 12.85 0 0 1 5.7 1.47V21.47c-1.908-.76-3.793-1.057-5.7-1.057-4.667 0-7.77 2.437-7.77 6.506 0 6.345 8.736 5.333 8.736 8.07 0 1.057-.92 1.402-2.207 1.402-1.908 0-4.345-.782-6.276-1.84v5.47c2.138.92 4.3 1.3 6.276 1.3 4.782 0 8.07-2.368 8.07-6.483-.023-6.85-8.782-5.632-8.782-8.207z" />
            </svg>
          </NavLink>
        </div>

        <div className="w-fit hidden lg:block overflow-x-hidden">
          <div className="flex gap-8 justify-between items-center py-2 text-white font-bold mt-4 ml-0 lg:text-[15px]">
            <div className="flex gap-8 lg:pr-2 xl:pr-40 2xl:pr-80">
              <p className="flex">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#FD99B6]" : ""} flex justify-center items-center gap-2 hover:text-[#8C93A3]`
                  }
                >
                  Products <FaChevronDown className="mt-1" />
                </NavLink>
              </p>
              <p className="flex">
                <NavLink
                  to="/solutions"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#FD99B6]" : ""} flex justify-center items-center gap-2 hover:text-[#8C93A3]`
                  }
                >
                  Solutions <FaChevronDown className="mt-1" />
                </NavLink>
              </p>
              <p className="flex">
                <NavLink
                  to="/developers"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#FD99B6]" : ""} flex justify-center items-center gap-2 hover:text-[#8C93A3]`
                  }
                >
                  Developers <FaChevronDown className="mt-1" />
                </NavLink>
              </p>
              <p className="flex">
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#FD99B6]" : ""} flex justify-center items-center gap-2 hover:text-[#8C93A3]`
                  }
                >
                  Resources <FaChevronDown className="mt-1" />
                </NavLink>
              </p>
              <p className="flex">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `${isActive ? "text-[#FD99B6]" : ""} flex justify-center items-center gap-2 hover:text-[#8C93A3]`
                  }
                >
                  Pricing <FaChevronDown className="mt-1" />
                </NavLink>
              </p>
            </div>
            <div className="flex justify-center relative items-center gap-4 lg:px-6 xl:right-30 2xl:right-35">
              <NavLink
                to="/signin"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#FD99B6]" : ""} flex justify-center items-center h-[33px] w-[68px] hover:text-[#8C93A3]`
                }
              >
                Sign in <FaChevronRight className="mt-1" />
              </NavLink>
              <NavLink to="/contactsales" onClick={() => setIsOpen(false)}>
                <button className="flex gap-1 text-[15px] h-[33px] w-[140px] font-semibold bg-white text-[#FAB000] hover:bg-[#FFE6EC] hover:cursor-pointer pl-4 pt-1.5 rounded-full">
                  Contact sales <FaChevronRight className="mt-1.5" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <button
          className="px-4 text-lg lg:hidden transition-colors duration-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="text-2xl text-[#383A41] cursor-pointer" />
          ) : (
            <FiMenu className="text-2xl text-white cursor-pointer" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="block lg:hidden h-screen bg-white pt-10 ">
          <ul className="py-2 text-[#383A41] text-[18px] font-bold space-y-10">
            <li className="flex px-4 hover:cursor-pointer hover:text-[#8C93A3]">
              <NavLink
                to="/products"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#FD99B6]" : ""} flex justify-between w-full items-center`
                }
              >
                Products <FaChevronRight className="mt-1" />
              </NavLink>
            </li>
            <li className="flex px-4 hover:cursor-pointer hover:text-[#8C93A3]">
              <NavLink
                to="/solutions"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#FD99B6]" : ""} flex justify-between w-full items-center`
                }
              >
                Solutions <FaChevronRight className="mt-1" />
              </NavLink>
            </li>
            <li className="flex px-4 hover:cursor-pointer hover:text-[#8C93A3]">
              <NavLink
                to="/developers"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#FD99B6]" : ""} flex justify-between w-full items-center`
                }
              >
                Developers <FaChevronRight className="mt-1" />
              </NavLink>
            </li>
            <li className="flex px-4 hover:cursor-pointer hover:text-[#8C93A3]">
              <NavLink
                to="/resources"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#FD99B6]" : ""} flex justify-between w-full items-center`
                }
              >
                Resources <FaChevronRight className="mt-1" />
              </NavLink>
            </li>
            <li className="flex px-4 hover:cursor-pointer hover:text-[#8C93A3]">
              <NavLink
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#FD99B6]" : ""} flex justify-between w-full items-center`
                }
              >
                Pricing <FaChevronRight className="mt-1" />
              </NavLink>
            </li>
            <li className="flex px-4 hover:cursor-pointer hover:text-[#8C93A3]">
              <NavLink
                to="/signin"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-[#FD99B6]" : ""} w-full items-center`
                }
              >
                Sign in
              </NavLink>
            </li>
          </ul>

          <div className="relative top-15">
            <div className="flex justify-center items-center w-full gap-5">
              <NavLink to="/startnow" onClick={() => setIsOpen(false)}>
                <button className="flex gap-1 text-[18px] font-semibold bg-[#635BFF] pt-1 pb-1 pr-2 pl-2 rounded-full text-white hover:bg-[#1C1D20] hover:cursor-pointer">
                  Start now <FaChevronRight className="mt-2 text-sm" />
                </button>
              </NavLink>
              <NavLink to="/contactsales" onClick={() => setIsOpen(false)}>
                <button className="flex gap-1 text-[18px] font-semibold text-[#635bff] hover:text-[#8C93A3] hover:cursor-pointer">
                  Contact sales <FaChevronRight className="mt-2 text-sm" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
