import non1 from "../images/nonprofits-1.webp"
import non2 from "../images/nonprofits-2.webp"
import non3 from "../images/nonprofits-3.webp"
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

function Solutions() {
  return (
    <>
      <div className="flex">
        <div className="overflow-x-hidden">
          <div>
            <div className="w-fit flex items-center mt-4.5 ml-4 sm:mx-10 2xl:ml-25">
              <h1 className="text-[18px] font-bold text-[#635bff] w-fit">Stripe for non-profits</h1>
            </div>
            <div>
              <h1 className="text-[48px] z-5 relative text-[#0a2540] font-bold w-[92vw] h-fit mx-4 my-4 sm:mx-10 md:my-10 lg:w-[40vw] xl:w-[40vw] 2xl:left-15">Maximise impact with reliable funding solutions</h1>
            </div>
            <div>
              <p className="text-[18px] relative z-5 text-[#425466] w-[80vw] mx-4 my-4 sm:mx-10 md:my-10 lg:w-[40vw] xl:w-[34vw] 2xl:left-15 2xl:my-20 2xl:text-[20px]">Make donating hassle-free, build sustainable funding streams, and focus more resources on driving impact. Contact our sales team to learn about non-profit pricing.</p>
            </div>
            <div className="flex gap-4 my-6 mx-4 sm:mx-10 2xl:mx-25">
              <NavLink to="/contactsales" onClick={() => setIsOpen(false)}>
                <button className="flex gap-1 text-[15px] h-[33px] w-[140px] font-semibold bg-[#635bff] text-[#ffffff] hover:bg-[#0a2540] hover:cursor-pointer pl-4 pt-1.5 rounded-full">
                  Contact sales <FaChevronRight className="mt-1.5" />
                </button>
              </NavLink>
              <NavLink
                to="/getstarted"
                onClick={() => setIsOpen(false)}
                className="flex justify-center items-center font-semibold h-[33px] w-fit text-[#635bff] hover:text-[#0a2540] hover:cursor-pointer"
              >
                Get Started <FaChevronRight className="mt-1" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hidden lg:block overflow-x-hidden mt-6 w-fit 2xl:ml-15 2xl:mt-10">
          <div className="flex gap-4 items-end">
            <img src={non1} className="h-[222px] w-[314px] rounded-2xl" />
            <img src={non2} className="h-[360px] w-[259px] rounded-2xl" />
          </div>
          <img src={non3} className="h-[264px] w-[372px] rounded-2xl my-4 ml-35" />
        </div>
      </div>
    </>
  )
}

export default Solutions