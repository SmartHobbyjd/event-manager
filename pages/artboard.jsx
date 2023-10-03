import Header from '@/Components/Artboard/Header'
import Table from '@/Components/Artboard/Table'
import React from 'react'

const artboard = () => {
  return (
    <div className='flex flex-col w-full h-full gap-10'>
      <Header />
      <Table />
    </div>
  )
}

export default artboard
