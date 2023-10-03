import Image from 'next/image'
import React from 'react'

const UsersDetials = () => {
  return (
    <div className='flex flex-col w-full mt-3'>
       <p className='text-[21px] font-normal'>
        Users Detials
      </p>
      <div className='mt-3 block w-full flex justify-around p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 gap-10'>
        <a href="#" class="block w-[50%] flex flex-col items-center justify-center p-6 bg-white border border-[#7f63f4] rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <Image src="/admin/usersDetail.svg" alt="usersDetail" width={200} height={200} />
            <Image src="/admin/dots.svg" alt="usersDetail" width={40} height={40} />
            <div className='flex gap-14 mt-8'>
              <div className='flex flex-col items-center'>
                <p className='text-[21px] text-[#464a53]'>
                  Matching
                </p>
                <p className='text-[37px] text-[#7f63f4]'>
                  55%
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <p className='text-[21px] text-[#464a53]'>
                  Activity Level
                </p>
                <p className='text-[37px] text-[#7f63f4]'>
                  90%
                </p>
              </div>
            </div>
        </a>
        <div className='w-[50%]'>
          <p className='text-[24px] text-[#464a53]'>
            User Name
          </p>
          <p className='text-[21px] text-[#abafb3]'>
            Name / Gender / Age
          </p>
          <div className='flex w-full gap-[10%] mt-8 items-center'>
            <p className='text-[21px] text-[#abafb3] w-[15%]'>
              Email:
            </p>
            <p className='text-[24px] text-[#464a53]'>
              bartholomew@gmail.com
            </p>
          </div>
          <div className='flex w-full gap-[10%] mt-8 items-center'>
            <p className='text-[21px] text-[#abafb3] w-[15%]'>
              City:
            </p>
            <p className='text-[24px] text-[#464a53]'>
              Goiania
            </p>
          </div>
          <div className='flex w-full gap-16 mt-8 items-center'>
            <p className='text-[21px] text-[#abafb3] w-[15%]'>
              Country:
            </p>
            <p className='text-[24px] text-[#464a53]'>
              BRA
            </p>
          </div>
          <div className='flex w-full gap-16 mt-8 items-center'>
            <p className='text-[21px] text-[#abafb3] w-[15%]'>
              Phone:
            </p>
            <p className='text-[24px] text-[#464a53]'>
              (+1)330-787-4788
            </p>
          </div>
          <div className='flex w-full gap-16 mt-8 items-center'>
            <p className='text-[21px] text-[#abafb3] w-[15%]'>
              Status:
            </p>
            <p className='text-[24px] text-[#464a53]'>
              Single
            </p>
          </div>
          <button className='px-8 py-2 text-[24px] text-[#7F63F4] border border-[#7F63F4] mt-5'>
            + Follow
          </button>
        </div>
      </div>
    </div>
  )
}

export default UsersDetials
