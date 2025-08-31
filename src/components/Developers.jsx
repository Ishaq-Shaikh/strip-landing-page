import { FaChevronRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import hero3 from "../images/hero3.png";

function Developers() {
  return (
    <>
      <div className="flex">
        <div className="overflow-x-hidden">
          <div>
            <div className="w-fit flex items-center mt-4.5 ml-4 sm:mx-10 2xl:ml-25">
              <h1 className="text-[18px] font-bold text-[#635bff] w-fit">
                Stripe Apps
              </h1>
            </div>
            <div>
              <h1 className="text-[48px] z-5 relative text-[#0a2540] font-bold w-[92vw] h-fit mx-4 my-4 sm:mx-10 md:my-10 lg:w-[40vw] xl:w-[40vw] 2xl:left-15">
                MBuild an app on Stripe
              </h1>
            </div>
            <div>
              <p className="text-[18px] relative z-5 text-[#425466] w-[80vw] mx-4 my-4 sm:mx-10 md:my-10 lg:w-[40vw] xl:w-[34vw] 2xl:left-15 2xl:my-20 2xl:text-[20px]">
                Stripe Apps lets you embed custom user experiences directly in
                the Stripe Dashboard and orchestrate the Stripe API. Create an
                app to streamline operations just for your team or for the more
                than one million businesses using Stripe.
              </p>
            </div>
            <div className="flex gap-4 my-6 mx-4 sm:mx-10 2xl:mx-25">
              <a
                href="https://docs.stripe.com/stripe-apps"
                onClick={() => setIsOpen(false)}
              >
                <button className="flex gap-1 text-[15px] h-[33px] w-[140px] font-semibold bg-[#635bff] text-[#ffffff] hover:bg-[#0a2540] hover:cursor-pointer pl-4 pt-1.5 rounded-full">
                  Reads the docs <FaChevronRight className="mt-1" />
                </button>
              </a>
              <a
                href="https://marketplace.stripe.com/categories/all"
                onClick={() => setIsOpen(false)}
                className="flex justify-center items-center font-semibold h-[33px] w-fit text-[#635bff] hover:text-[#0a2540] hover:cursor-pointer"
              >
                Browse apps <FaChevronRight className="mt-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block overflow-x-hidden mt-6 w-fit 2xl:ml-15 2xl:mt-10">
          <img src={hero3} className="w-[600px] rounded-4xl" />
        </div>
      </div>
    </>
  );
}

export default Developers;
