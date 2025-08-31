import pro from "../images/products.svg"
import hero from "../images/hero image 2.png"
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

function Products() {
  return (
    <>
      <div className="flex">
        <div className="overflow-x-hidden">
          <div>
            <div className="hover:cursor-pointer w-fit flex items-center mt-4.5 ml-4 sm:mx-10 2xl:ml-25">
              <img src={pro} />
              <h1 className="text-[18px] font-bold text-[#9966ff] hover:text-[#0A2540] w-fit">Payments</h1>
            </div>
            <div>
              <h1 className="text-[48px] z-5 relative text-[#0a2540] font-bold w-[92vw] h-fit mx-4 my-4 sm:mx-10 md:my-10 lg:w-[50vw] xl:w-[40vw] 2xl:left-15">Unified, global payments to grow your revenue</h1>
            </div>
            <div>
              <p className="text-[18px] relative z-5 text-[#425466] w-[80vw] mx-4 my-4 sm:mx-10 md:my-10 lg:w-[40vw] xl:w-[34vw] 2xl:left-15 2xl:my-20 2xl:text-[20px]">Accept payments online, in person, and around the world with a payments solution built for any business – from scaling startups to global enterprises.</p>
            </div>
            <div className="w-fit">
              <NavLink to="/requesttoinvite">
                <div className="h-[33px] w-[164px] mt-10 mb-10 ml-4 relative rounded-full bg-[#9966ff] hover:cursor-pointer hover:bg-[#1C1D20] md:ml-10 lg:mt-5 xl:ml-10 2xl:left-15">
                  <button className="text-[15px] text-white flex pt-1.5 pl-4 hover:cursor-pointer font-semibold">Request an invite <FaChevronRight className="mt-1" /></button>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hidden lg:block overflow-x-hidden w-fit">
          <img src={hero} className="w-[800px] mx-20 my-10 relative rounded-l-4xl 2xl:rounded-4xl 2xl:w-fit h-[600px] 2xl:mx-0 2xl:ml-15 2xl:mt-10" />
        </div>
      </div>
    </>
  )
}

export default Products