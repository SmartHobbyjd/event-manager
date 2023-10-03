import React from 'react'
import Image from 'next/image'

const Users = () => {
  return (
    <div className='flex flex-col mt-3'>
      <p className='text-[21px] font-normal'>
        Users
      </p>
      <a href="#" class="mt-3 block w-full flex justify-around p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <Image src="/admin//users/users1.svg" alt="users 1" width={100} height={100} className="flex justify-center"/>
        <Image src="/admin//users/users2.svg" alt="users 2" width={100} height={100} />
        <Image src="/admin//users/users3.svg" alt="users 3" width={100} height={100} />
        <Image src="/admin//users/users4.svg" alt="users 4" width={100} height={100} />
      </a>
    </div>
  )
}

export default Users
