import AboutMe from '@/Components/Admin/AboutMe'
import AllServices from '@/Components/Admin/AllServices'
import Services from '@/Components/Admin/Services'
import Users from '@/Components/Admin/Users'
import UsersDetials from '@/Components/Admin/UsersDetials'
import Tabs from '@/Components/Tabs'
import React from 'react'

const admin = () => {
  return (
    <div className='flex flex-col w-full h-full bg-gray-50 p-5'>
      <Services />
      <Users />
      <UsersDetials />
      <AllServices />
      <Tabs/>
    </div>
  )
}

export default admin
