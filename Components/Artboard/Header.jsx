import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between p-10'>
      <div className='flex items-center gap-10'>
        <p className='text-[22px] text-[#06152b]'>
        Product List
        </p>
        <p className='opacity-50 text-[38px] text-[#069368]'>
          Add NEW +
      </p>
      </div>
      <div className='flex items-center gap-10 mr-5'>
        <div className='flex items-center gap-2'>
          <Image src="/pdf.svg" alt="detailsBtn" width={50} height={50} />
          <div className='flex flex-col'>
            <p className='text-[#484e5b] text-[17px]'>
              Result.pdf
            </p>
            <div className='flex items-cente gap-2'>
              <p className='text-[#4c5361] text-[13px]'>
                26 February 2022
              </p>
              <Image src="/yellowDot.svg" alt="detailsBtn" width={10} height={10} />
              <p className='text-[#4c5361] text-[13px]'>
              9.2 MB
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Image src="/excel.svg" alt="detailsBtn" width={50} height={50} />
          <div className='flex flex-col'>
            <p className='text-[#484e5b] text-[17px]'>
              Results.xls
            </p>
            <div className='flex items-cente gap-2'>
              <p className='text-[#4c5361] text-[13px]'>
              17 January 2022
              </p>
              <Image src="/yellowDot.svg" alt="detailsBtn" width={10} height={10} />
              <p className='text-[#4c5361] text-[13px]'>
              12 MB
              </p>
            </div>
        </div>
        <Image src="/ic.svg" alt="detailsBtn" width={16} height={16} className="ml-10"/>
        <Image src="/threeDots.svg" alt="detailsBtn" width={16} height={16} className="ml-10"/>
      </div>
      </div>
    </div>
  )
}

export default Header
