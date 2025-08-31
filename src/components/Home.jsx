import { FaChevronRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import hero from "../images/hero image.png"

function Home() {
  return (
    <>
      <div className="flex w-full overflow-x-hidden">
        <div>
          <div className='mt-10 ml-5 xl:ml-25'>
            <h1 className='font-black text-[12vw] text-[#12153A] sm:text-[6vw] sm:w-[316px] lg:w-[400px] xl:w-[40vw] '>Financial infrastructure to grow your revenue</h1>
          </div>
          <div className='h-[168px] w-[70vw] mt-5 ml-5 sm:w-[35vw] lg:w-[40vw] xl:ml-25 '>
            <p className='text-[18px] text-[#4D5E6F]'>Join the millions of companies that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
          </div>
          <div className="w-fit">
            <NavLink to="/requesttoinvite">
              <div className="h-[33px] w-fit mt-10 mb-10 ml-5 relative rounded-full bg-[#1C1D20] hover:cursor-pointer hover:bg-[#6C7C8C] lg:mt-5 xl:ml-20 xl:mt-0">
                <button className="text-[15px] w-fit text-white flex pt-1.5 pl-4 hover:cursor-pointer font-semibold">Request an invite <FaChevronRight className="mt-1" /></button>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="hidden sm:block">
          <img src={hero} className="rounded-4xl relative -right-20 h-[90vw] md:-right-30 lg:w-[30vw] lg:h-[50vw] lg:-right-65 lg:top-15" />
        </div>
      </div>
    </>
  )
}

export default Home