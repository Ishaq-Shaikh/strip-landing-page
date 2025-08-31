import open1 from "../images/open1.webp"
import open2 from "../images/open2.webp"
import open3 from "../images/open3.webp"
import open4 from "../images/open4.webp"

const Opens = () => {
  return (
    <>
      <div className="flex overflow-x-hidden">
        <div>
          <div className='overflow-x-hidden'>
          <h1 className="text-[48px] z-5 relative text-[#0a2540] font-bold w-[92vw] h-fit mx-4 my-4 sm:mx-10 md:my-10 lg:w-[50vw] xl:w-[40vw] 2xl:left-15">Have a meaningful impact on a global business</h1>
        </div>
        <div>
          <p className="text-[18px] relative z-5 text-[#425466] w-[80vw] mx-4 my-4 sm:mx-10 md:my-10 lg:w-[40vw] xl:w-[34vw] 2xl:left-15 2xl:my-20 2xl:text-[20px]">Interns at Stripe do real work, on real problems, shipping to real customers. Some of the most important things Stripe has built, such as the initial versions of Connect and Atlas, were created by one or two people in their first “real” jobs.</p>
        </div>
        </div>
          <div className="hidden lg:block overflow-x-hidden mt-6 w-fit 2xl:ml-15 2xl:mt-10">
            <div className="flex gap-4 items-end">
              <img src={open1} className="h-[222px] w-[314px] rounded-2xl" />
              <img src={open2} className="h-[360px] w-[259px] rounded-2xl" />
            </div>
            <div className="flex gap-4 items-end">
              <img src={open3} className="h-[264px] w-[372px] rounded-2xl my-4" />
            <img src={open4} className="h-[264px] w-[372px] rounded-2xl my-4" />
            </div>
          </div>
        </div>
    </>
  )
}

export default Opens