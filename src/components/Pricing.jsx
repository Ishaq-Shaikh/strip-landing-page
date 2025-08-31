import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

function Pricing() {
  return (
    <>
      <div>
        <div className='w-[60vw] mx-10 my-4 sm:mx-15 lg:mx-20 xl:w-[40vw]'>
          <h1 className='text-[48px] font-bold tracking-tighter'>Pricing built for businesses of all sizes</h1>
        </div>
        <div className="xl:flex overflow-x-hidden xl:mx-10 xl:my-10 xl:gap-10">
          <div className="w-[80vw] max-h-[500px] overflow-hidden bg-[#FFFFFF] mx-6 my-4 rounded-xl sm:flex sm:mx-15 lg:mx-20 xl:m-0 xl:w-[45vw]">
            <div>
              <h1 className="text-[26px] text-[#0a2540] font-bold mx-5 pt-6">Standard</h1>
              <p className="text-[15px] text-[#425466] mx-6 pt-6">Access a complete payments platform with simple, pay-as-you-go pricing. No setup fees, monthly fees, or hidden fees.</p>
              <div className="w-fit">
                <NavLink to="/requesttoinvite">
                  <div className="h-[33px] w-[164px] mt-6 mb-10 ml-4 relative rounded-full bg-[#9966ff] hover:cursor-pointer hover:bg-[#1C1D20] md:ml-10 lg:mt-5 xl:ml-10 2xl:left-15">
                    <button className="text-[15px] text-white flex pt-1.5 pl-4 hover:cursor-pointer font-semibold">Request an invite <FaChevronRight className="mt-1" /></button>
                  </div>
                </NavLink>
              </div>
            </div>
            <div>
              <div className="bg-[#F6F9] my-6 mx-2 w-[75vw] rounded-xl h-[20vw] flex flex-col items-center justify-center sm:w-[40vw] sm:h-[15vw] lg:h-[10vw] xl:w-[25vw]">
                <h1 className="text-[26px] text-[#0a2540] font-bold">2%</h1>
                <p className="text-[16px] text-[#425466]">for cards issued in India</p>
              </div>
              <div className="bg-[#F6F9] pb-4 my-6 mx-2 w-[75vw] rounded-xl h-[20vw] flex flex-col items-center justify-center sm:w-[40vw] sm:h-[15vw] lg:h-[10vw] xl:w-[25vw]">
                <h1 className="text-[26px] text-[#0a2540] font-bold">3%</h1>
                <p className="text-[16px] text-[#425466]">for cards issued outside India</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[80vw] max-h-[500px] overflow-hidden bg-[#0C2E4E] mx-6 my-4 rounded-xl sm:flex sm:mx-15 lg:mx-20 xl:my-6 xl:m-0 xl:w-[45vw]">
              <div>
                <h1 className="text-[26px] text-[#ffffff] font-bold mx-5 pt-6">Custom</h1>
                <p className="text-[15px] text-[#adbdcc] mx-6 pt-6">Design a custom package – available for businesses with large payments volume or unique business models.</p>
                <div className="w-fit my-4 mx-4">
                  <NavLink to="/contactsales" onClick={() => setIsOpen(false)}>
                    <button className="flex gap-1 text-[15px] h-[33px] w-[140px] font-semibold bg-[#00d4ff] text-[#0a2540] hover:bg-[#ffffff] hover:cursor-pointer pl-4 pt-1.5 rounded-full">
                      Contact sales <FaChevronRight className="mt-1.5" />
                    </button>
                  </NavLink>
                </div>
              </div>
              <div className="text-white">
                <div className="h-[15vw] w-[75vw] flex items-center justify-center text-[16px] bg-[#1F4468] mx-2 rounded-xl my-4 sm:w-[45vw] sm:h-[10vw] lg:h-[6vw] xl:w-[25vw]">
                  <h1>Volume discounts</h1>
                </div>
                <div className="h-[15vw] w-[75vw] flex items-center justify-center text-[16px] bg-[#1F4468] mx-2 rounded-xl my-4 sm:w-[45vw] sm:h-[10vw] lg:h-[6vw] xl:w-[25vw]">
                  <h1>Multi-product discounts</h1>
                </div>
                <div className="h-[15vw] w-[75vw] flex items-center justify-center text-[16px] bg-[#1F4468] mx-2 rounded-xl my-4 sm:w-[45vw] sm:h-[10vw] lg:h-[6vw] xl:w-[25vw]">
                  <h1>Country-specific rates</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing