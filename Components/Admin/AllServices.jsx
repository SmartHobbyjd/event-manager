import Image from 'next/image'
import React from 'react'

const AllServices = () => {
  return (
    <div className='flex flex-col w-full mt-3'>
      <p className='text-[27px] text-[#464a53]'>
        Here Is All Services
      </p>
      <p className='text-[19px] text-[#abafb3]'>
        Management
      </p>
      <a href="#" class="block w-full py-6 px-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-3">
         <div className='flex justify-between'>
          <p className='text-[21px] text-[#464a53]'>
            Title
          </p>
          <p className='text-[21px] text-[#000000]'>
            Edit
          </p>
         </div>
         <div className='flex w-full gap-7 mt-10'>
            <Image src="/admin/Ellipse1.svg" alt="Ellipse1" width={100} height={100} />
            <div className='flex flex-col gap-5'>
              <p className='text-[19px] text-[#464a53]'>
                Fletch Skinner
              </p>
              <p className='text-[16px] text-[#abafb3]'>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
              </p>
            </div>
         </div>
         <div className='flex w-full gap-7 mt-10'>
            <Image src="/admin/Ellipse1.svg" alt="Ellipse1" width={100} height={100} />
            <div className='flex flex-col gap-5'>
              <p className='text-[19px] text-[#464a53]'>
                Rodney Artichoke
              </p>
              <p className='text-[16px] text-[#abafb3]'>
                I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
              </p>
            </div>
         </div>
         <div className='flex w-full gap-7 mt-10'>
            <Image src="/admin/Ellipse1.svg" alt="Ellipse1" width={100} height={100} />
            <div className='flex flex-col gap-5'>
              <p className='text-[19px] text-[#464a53]'>
                Ursula Gurnmeister
              </p>
              <p className='text-[16px] text-[#abafb3]'>
                One morning Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
              </p>
            </div>
         </div>
      </a>

    </div>
  )
}

export default AllServices
