import React from 'react'
import Calender from '@/Components/Admin/Calender'

const events = () => {

  return (
    <div className='p-[1.875rem] flex justify-between'>
      <div className='shadow-custom w-[25%] h-max'>
          <div className='flex flex-col w-full p-5 pl-8 gap-10'>
            <p className='text-[22px] text-[#464a53]'>Drag and Drop your Event</p>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-2'>
                <span class="bg-[#34C73B] rounded-xl" style={{width: "10px", height: "10px"}}>&nbsp;</span>
                <p className='text-[15px] text-[#464a53] font-normal'>Lunch with Client</p>
              </div>
              <div className='flex items-center  gap-2'>
                <span class="bg-[#E91E63] rounded-xl" style={{width: "10px", height: "10px"}}>&nbsp;</span>
                <p className='text-[15px] text-[#464a53] font-normal'>New Theme Release</p>
              </div>
              <div className='flex items-center  gap-2'>
                <span class="bg-[#3960D1] rounded-xl" style={{width: "10px", height: "10px"}}>&nbsp;</span>
                <p className='text-[15px] text-[#464a53] font-normal'>Meet Manager</p>
              </div>
              <div className='flex items-center  gap-2'>
                <span class="bg-[#9C27B0] rounded-xl" style={{width: "10px", height: "10px"}}>&nbsp;</span>
                <p className='text-[15px] text-[#464a53] font-normal'>Create New Theme</p>
              </div>
              <div className='flex items-center  gap-2'>
                <span class="bg-[#FF9800] rounded-xl" style={{width: "10px", height: "10px"}}>&nbsp;</span>
                <p className='text-[15px] text-[#464a53] font-normal'>Birth Day Party</p>
              </div>
            </div>
            <div class="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remove After Drop</label>
            </div>
            <button className='flex justify-center w-[80%] py-1 px-6 bg-[#7F63F4] text-white'>+ Add New Event</button>
          </div>
      </div>
      <div className='w-[70%] h-[49.375rem] p-[2rem] shadow-custom'>
      <Calender />
      </div>
    </div>
  )
}

export default events
