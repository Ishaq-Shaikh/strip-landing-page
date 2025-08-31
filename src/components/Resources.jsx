import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import r1 from "../images/r1.webp"
import r2 from "../images/r2.webp"
import r3 from "../images/r3.webp"

function Resources() {
  return (
    <>
      <div className="flex">
        <div className="overflow-x-hidden">
          <div>
            <div>
              <h1 className="text-[48px] z-5 relative text-[#0a2540] font-bold w-[92vw] h-fit mx-4 my-4 sm:mx-10 md:my-10 lg:w-[50vw] xl:w-[40vw] 2xl:left-15">Our customers are building the future</h1>
            </div>
            <div>
              <p className="text-[18px] relative z-5 text-[#425466] w-[80vw] mx-4 my-4 sm:mx-10 md:my-10 lg:w-[40vw] xl:w-[34vw] 2xl:left-15 2xl:my-20 2xl:text-[20px]">Stripe builds financial infrastructure that ambitious companies use to launch their boldest products. Our customers range from hours-old startups to complex global businesses. Collectively, they are growing the GDP of the internet. You can help.</p>
            </div>
            <div className="w-fit">
              <NavLink to="/opens">
                <div className="h-[33px] w-[164px] mt-10 mb-10 ml-4 relative rounded-full bg-[#9966ff] hover:cursor-pointer hover:bg-[#1C1D20] md:ml-10 lg:mt-5 xl:ml-10 2xl:left-15">
                  <button className="text-[15px] text-white flex pt-1.5 pl-4 hover:cursor-pointer font-semibold">See open roles <FaChevronRight className="mt-1" /></button>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hidden lg:block overflow-x-hidden mt-6 w-fit 2xl:ml-15 2xl:mt-10">
          <div className="flex gap-4 items-end">
            <img src={r1} className="h-[222px] w-[314px] rounded-2xl" />
            <img src={r2} className="h-[360px] w-[259px] rounded-2xl" />
          </div>
          <img src={r3} className="h-[264px] w-[372px] rounded-2xl my-4 ml-35" />
        </div>
      </div>
    </>
  )
}

export default Resources