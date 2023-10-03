import Image from 'next/image'
import React from 'react'

const Table = () => {
  return (

<div class="relative overflow-x-auto shadow-md sm:rounded-lg p-10 pt-0">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3 text-[18px] text-[#809fb8] font-normal">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 text-[18px] text-[#809fb8] font-normal">
                    Views
                </th>
                <th scope="col" class="px-6 py-3 text-[18px] text-[#809fb8] font-normal">
                  Convertion
                </th>
                <th scope="col" class="px-6 py-3 text-[18px] text-[#809fb8] font-normal">
                    Total
                </th>
                <th scope="col" class="px-6 py-3 text-[18px] text-[#809fb8] font-normal">
                    Rate
                </th>
                <th scope="col" class="px-6 py-3 text-[18px] text-[#809fb8] font-normal">
                    Status
                </th>
                <th scope="col" class="px-6 py-3 text-[18px] text-[#809fb8] font-normal">
                    Option
                </th>
                <th scope="col" class="px-6 py-3 text-[18px] text-[#809fb8] font-normal">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-[#1ad598] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 custom-checkbox"
                    />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[46px] h-[46px] rounded-lg text-[#217EFD] text-[18px]' style={{background: "rgba(33, 126, 253, 0.3)"}}>01</div>
                      <p className='text-[18px] text-[#06152b] font-normal'> UI Elements and Widgets</p>
                    </div>
                </th>
                <td class="px-6 py-4">
                    <div className=' flex justify-center p-1 text-[#809fb8] bg-[#ffffff] border border-2 border-[rgba(217,225,231,0.8 )] rounded-lg'>
                      3890
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div className='flex items-center gap-3'>
                      <Image src="/greenArrow.svg" alt="greenArrow" width={20} height={20}/>
                      <p className='text-[16px] text-[#1ad598] font-normal'>+16,24 %</p>
                    </div>
                </td>
                <td class="px-6 py-4 text-[18px] text-[#050708]">
                  $49,95
                </td>
                <td class="px-6 py-4 text-[#06152b] text-[18px]">
                  0.59
                </td>
                <td class="px-6 py-4">
                  <div className='flex justify-center bg-[#d9e1e7] rounded-lg p-1 text-[#99b2c6] text-[14px]'>
                  PENDING
                  </div>
                </td>
                <td class="px-6 py-4">
                    <Image src="/detailsBtn.svg" alt="detailsBtn" width={100} height={100} />
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                   <Image src="/donwload.svg" alt="donwload" width={30} height={30} className="flex items-center mt-2"/>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-[#1ad598] bg-gray-100 border-gray-300 rounded focus:ring-[#1ad598] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[46px] h-[46px] rounded-lg text-[#FFB536] text-[18px]' style={{background: "rgba(255,181,54,0.3 )"}}>02</div>
                      <p className='text-[18px] text-[#06152b] font-normal'> UI Elements and Widgets</p>
                    </div>
                </th>
                <td class="px-6 py-4">
                    <div className=' flex justify-center p-1 text-[#809fb8] bg-[#ffffff] border border-2 border-[rgba(217,225,231,0.8 )] rounded-lg'>
                      3890
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div className='flex items-center gap-3'>
                      <Image src="/greenArrow.svg" alt="greenArrow" width={20} height={20}/>
                      <p className='text-[16px] text-[#1ad598] font-normal'>+16,24 %</p>
                    </div>
                </td>
                <td class="px-6 py-4 text-[18px] text-[#050708]">
                  $49,95
                </td>
                <td class="px-6 py-4 text-[#06152b] text-[18px]">
                  0.59
                </td>
                <td class="px-6 py-4">
                  <div className='flex justify-center bg-[rgba(26,213,152,0.3)] rounded-lg p-1 text-[#1AD598] text-[14px]'>
                  ACTIVE
                  </div>
                </td>
                <td class="px-6 py-4">
                    <Image src="/detailsBtn.svg" alt="detailsBtn" width={100} height={100} />
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                   <Image src="/donwload.svg" alt="donwload" width={30} height={30} className="flex items-center mt-2"/>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-[#1ad598] bg-gray-100 border-gray-300 rounded focus:ring-[#1ad598] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[46px] h-[46px] rounded-lg text-[#DB5AEE] text-[18px]' style={{background: "rgba(219,90,238,0.3 )"}}>03</div>
                      <p className='text-[18px] text-[#06152b] font-normal'> UI Elements and Widgets</p>
                    </div>
                </th>
                <td class="px-6 py-4">
                    <div className=' flex justify-center p-1 text-[#809fb8] bg-[#ffffff] border border-2 border-[rgba(217,225,231,0.8 )] rounded-lg'>
                      3890
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div className='flex items-center gap-3'>
                      <Image src="/redArrow.svg" alt="greenArrow" width={20} height={20}/>
                      <p className='text-[16px] text-[#EA3A3D] font-normal'>+16,24 %</p>
                    </div>
                </td>
                <td class="px-6 py-4 text-[18px] text-[#050708]">
                  $49,95
                </td>
                <td class="px-6 py-4 text-[#06152b] text-[18px]">
                  0.59
                </td>
                <td class="px-6 py-4">
                  <div className='flex justify-center bg-[#d9e1e7] rounded-lg p-1 text-[#99b2c6] text-[14px]'>
                  PENDING
                  </div>
                </td>
                <td class="px-6 py-4">
                    <Image src="/detailsBtn.svg" alt="detailsBtn" width={100} height={100} />
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                   <Image src="/donwload.svg" alt="donwload" width={30} height={30} className="flex items-center mt-2"/>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-[#1ad598] bg-gray-100 border-gray-300 rounded focus:ring-[#1ad598] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[46px] h-[46px] rounded-lg text-[#F3654A] text-[18px]' style={{background: "rgba(243,101,74,0.3 )"}}>04</div>
                      <p className='text-[18px] text-[#06152b] font-normal'> UI Elements and Widgets</p>
                    </div>
                </th>
                <td class="px-6 py-4">
                    <div className=' flex justify-center p-1 text-[#809fb8] bg-[#ffffff] border border-2 border-[rgba(217,225,231,0.8 )] rounded-lg'>
                      3890
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div className='flex items-center gap-3'>
                      <Image src="/greenArrow.svg" alt="greenArrow" width={20} height={20}/>
                      <p className='text-[16px] text-[#1ad598] font-normal'>+16,24 %</p>
                    </div>
                </td>
                <td class="px-6 py-4 text-[18px] text-[#050708]">
                  $49,95
                </td>
                <td class="px-6 py-4 text-[#06152b] text-[18px]">
                  0.59
                </td>
                <td class="px-6 py-4">
                  <div className='flex justify-center bg-[#d9e1e7] rounded-lg p-1 text-[#99b2c6] text-[14px]'>
                  PENDING
                  </div>
                </td>
                <td class="px-6 py-4">
                    <Image src="/detailsBtn.svg" alt="detailsBtn" width={100} height={100} />
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                   <Image src="/donwload.svg" alt="donwload" width={30} height={30} className="flex items-center mt-2"/>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-[#1ad598] bg-gray-100 border-gray-300 rounded focus:ring-[#1ad598] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[46px] h-[46px] rounded-lg text-[#384455] text-[18px]' style={{background: "rgba(61,102,149,0.3 )"}}>05</div>
                      <p className='text-[18px] text-[#06152b] font-normal'> UI Elements and Widgets</p>
                    </div>
                </th>
                <td class="px-6 py-4">
                    <div className=' flex justify-center p-1 text-[#809fb8] bg-[#ffffff] border border-2 border-[rgba(217,225,231,0.8 )] rounded-lg'>
                      3890
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div className='flex items-center gap-3'>
                      <Image src="/redArrow.svg" alt="greenArrow" width={20} height={20}/>
                      <p className='text-[16px] text-[#EA3A3D] font-normal'>+16,24 %</p>
                    </div>
                </td>
                <td class="px-6 py-4 text-[18px] text-[#050708]">
                  $49,95
                </td>
                <td class="px-6 py-4 text-[#06152b] text-[18px]">
                  0.59
                </td>
                <td class="px-6 py-4">
                  <div className='flex justify-center bg-[#d9e1e7] rounded-lg p-1 text-[#99b2c6] text-[14px]'>
                  PENDING
                  </div>
                </td>
                <td class="px-6 py-4">
                    <Image src="/detailsBtn.svg" alt="detailsBtn" width={100} height={100} />
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                   <Image src="/donwload.svg" alt="donwload" width={30} height={30} className="flex items-center mt-2"/>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-[#1ad598] bg-gray-100 border-gray-300 rounded focus:ring-[#1ad598] dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className='flex items-center gap-3'>
                      <div className='flex items-center justify-center w-[46px] h-[46px] rounded-lg text-[#895BF1] text-[18px]' style={{background: "rgba(137,91,241,0.3 )"}}>06</div>
                      <p className='text-[18px] text-[#06152b] font-normal'> UI Elements and Widgets</p>
                    </div>
                </th>
                <td class="px-6 py-4">
                    <div className=' flex justify-center p-1 text-[#809fb8] bg-[#ffffff] border border-2 border-[rgba(217,225,231,0.8 )] rounded-lg'>
                      3890
                    </div>
                </td>
                <td class="px-6 py-4">
                    <div className='flex items-center gap-3'>
                      <Image src="/greenArrow.svg" alt="greenArrow" width={20} height={20}/>
                      <p className='text-[16px] text-[#1ad598] font-normal'>+16,24 %</p>
                    </div>
                </td>
                <td class="px-6 py-4 text-[18px] text-[#050708]">
                  $49,95
                </td>
                <td class="px-6 py-4 text-[#06152b] text-[18px]">
                  0.59
                </td>
                <td class="px-6 py-4">
                  <div className='flex justify-center bg-[#d9e1e7] rounded-lg p-1 text-[#99b2c6] text-[14px]'>
                  PENDING
                  </div>
                </td>
                <td class="px-6 py-4">
                    <Image src="/detailsBtn.svg" alt="detailsBtn" width={100} height={100} />
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                   <Image src="/donwload.svg" alt="donwload" width={30} height={30} className="flex items-center mt-2"/>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default Table
