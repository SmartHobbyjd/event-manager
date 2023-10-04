import React, {useState} from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const SideBar = ({setIsSidebarOpen, isSidebarOpen, closeModal, openModal, isModalOpen}) => {
  const customStyles = {
    content: {
      display: "flex",
      justifyContent: "end",
      alignItems: "start",
      padding: 0,
      border: "none",
      // background: "#1F5164 !important",
      width: '300px',
      height: '100%',
      'borderRadius': "10px",
      'background-color': "#1F5164",
      'top': '0px',
      'right': '0px',
      'bottom': '0px',
      'left': '0px',
    },
    overlay: {
      background: "rgba(13, 18, 27, 0.6)",
    }
  }
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className="bg-[#1F5164] flex flex-col justify-bwteen h-screen relative w-[363px]">
          <div className="absolute top-[220px] right-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="381" viewBox="345 280.5 25 381"><g data-name="CompositeLayer"><path d="M358.5 280.5v381" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#fff" fill="transparent" data-name="Line 9"/><g data-name="Ellipse 2"><path d="M345 306.4a12.5 12.5 0 1 1 0 .1z" fill="#fff" fill-rule="evenodd"/><path d="M345.5 306.402a12 12 0 1 1 0 .096z" stroke-linejoin="round" stroke-linecap="round" stroke="#707070" fill="transparent" stroke-width=".96"/></g></g></svg>
          </div>
          <div className="w-full">
            <div className="bg-[#98AFB9]">
              <div className="text-[#707070] text-[50px] flex justify-center">Logo</div>
            </div>
            <div className=" pt-[13px]">
              <div className="">
                <div className="bg-[#EFF4F8] mx-[11px] rounded-[7px]">
                  <div className="flex justify-center items-center font-bold text-[#716565] opacity-80 text-[18px] md:text-[30px]">SEARCH HISTORY</div>
                </div>
                <div className="ml-[24px] mt-[17px] text-[18px] md:text-[38px] font-bold text-[#f8fcff] opacity-50">
                  ADD NEW+
                </div>
                <div className="mt-[14px] ml-[32px] font-bold text-[16px] md:text-[23px] text-[#f8fcff]">
                  Date / time
                </div>
                <div className="ml-[32px] text-[22px] md:text-[33px] text-[#f8fcff] font-bold opacity-50">
                  Inquire history
                </div>
                <div className="m-auto w-[286px] border-b-[2px] border-[#FFFFFF]"></div>
                <div className="mt-[14px] ml-[32px] font-bold text-[16px] md:text-[23px] text-[#f8fcff]">
                  Date / time
                </div>
                <div className="ml-[32px] text-[22px] md:text-[33px] text-[#f8fcff] font-bold opacity-50">
                  Inquire history
                </div>
                <div className="m-auto w-[286px] border-b-[2px] border-[#FFFFFF]"></div>
              </div>
            </div>
          </div>
          <div className="bg-[#1F5164]">
            <div className="w-[300px] md:w-[342px] m-auto bg-[#1F5164] mt-60">
              <div className="text-[22px] md:text-[38px] font-bold justify-center flex items-center py-[60px] h-[378px] bg-[#f8fcff] justify-center font-[38px] font-bold text-[#217b96]  mb-2 border-[1px] border-[#707070]">
                ADS BOX
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={closeModal}>Close Modal</button> */}
      </Modal>
      <div className="bg-[#1F5164] flex flex-col justify-bwteen h-full relative w-full">
        <div className="absolute top-[220px] right-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="381" viewBox="345 280.5 25 381"><g data-name="CompositeLayer"><path d="M358.5 280.5v381" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#fff" fill="transparent" data-name="Line 9"/><g data-name="Ellipse 2"><path d="M345 306.4a12.5 12.5 0 1 1 0 .1z" fill="#fff" fill-rule="evenodd"/><path d="M345.5 306.402a12 12 0 1 1 0 .096z" stroke-linejoin="round" stroke-linecap="round" stroke="#707070" fill="transparent" stroke-width=".96"/></g></g></svg>
        </div>
        <div className="w-full h-full">
          <div className="bg-[#98AFB9]">
            <div className="text-[#707070] text-[50px] flex justify-center">Logo</div>
          </div>
          <div className=" pt-[13px]">
            <div className="">
              <div className="bg-[#EFF4F8] mx-[11px] rounded-[7px]">
                <div className="flex justify-center items-center font-bold text-[#716565] opacity-80 text-[30px]">SEARCH HISTORY</div>
              </div>
              <div className="ml-[24px] mt-[17px] text-[38px] font-bold text-[#f8fcff] opacity-50">
                ADD NEW+
              </div>
              <div className="mt-[14px] ml-[32px] font-bold text-[23px] text-[#f8fcff]">
                Date / time
              </div>
              <div className="ml-[32px] text-[33px] text-[#f8fcff] font-bold opacity-50">
                Inquire history
              </div>
              <div className="m-auto w-[286px] border-b-[2px] border-[#FFFFFF]"></div>
              <div className="mt-[14px] ml-[32px] font-bold text-[23px] text-[#f8fcff]">
                Date / time
              </div>
              <div className="ml-[32px] text-[33px] text-[#f8fcff] font-bold opacity-50">
                Inquire history
              </div>
              <div className="m-auto w-[286px] border-b-[2px] border-[#FFFFFF]"></div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center bg-[#1F5164]">
          <div className="w-[342px] text-[38px] font-bold justify-center flex items-center py-[60px] h-[378px] bg-[#f8fcff] justify-center font-[38px] font-bold text-[#217b96]  mb-2 border-[1px] border-[#707070]">
            ADS BOX
          </div>
        </div>
      </div>
    </>
  )
}
export default SideBar
