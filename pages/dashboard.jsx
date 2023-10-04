import React, { useEffect, useState } from "react";
import SideBar from '@/Components/Dashboard/SideBar';
import MainContainer from '@/Components/Dashboard/MainContainer';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log("setIsSidebarOpensetIsSidebarOpensetIsSidebarOpen", isSidebarOpen)
  useEffect (() => {
    if (isSidebarOpen) {
      openModal()
    } else {
      closeModal()
    }
  }, [isSidebarOpen])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div id="root" className='m-[18px] text-black flex'>
      <div className='w-[363px] min-h-screen bg-[#1F5164] lg:flex hidden'>
        <SideBar
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      <div className='hidden md:flex flex-col md:flex-1'>
        <MainContainer
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />  
      </div>
      <div className='md:hidden flex flex-col max-w-[340px] md:max-w-auto'>
        <MainContainer
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />  
      </div>
    </div>
  )
}
export default Dashboard;
