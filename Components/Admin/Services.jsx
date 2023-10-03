import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='flex flex-col'>
      <p className='text-[21px] font-normal'>
        Services
      </p>
      <a href="#" class="mt-3 block w-full flex justify-around p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Image src="/admin/service1.svg" alt="service 1" width={100} height={100} />
        <Image src="/admin/service2.svg" alt="service 2" width={100} height={100} />
        <Image src="/admin/service3.svg" alt="service 3" width={100} height={100} />
        <Image src="/admin/service4.svg" alt="service 4" width={100} height={100} />
      </a>
    </div>
  )
}

export default Services
