import React from "react";

const MainContainer = ({setIsSidebarOpen, isSidebarOpen}) => {
  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };
  return (
    <>
      <div className="bg-[#205164] border-[1px] border-[#707070] w-full justify-between flex py-[30px]">
        <div className="bg-[#f8fcff] w-[200px] md:w-[260px] lg:w-[360px] xl:w-[420px] 2xl:w-[550px] 3xl:w-[647px] rounded-[7px] ml-[15px] relative">
          <div className="text-[10px] md:text-[18px] xl:text-[28px] 3xl:text-[30px] text-[#707070] ml-[20px] xl:ml-[26px] py-2 xl:py-0">Select A Micro service</div>
          <div className="md:flex hidden absolute top-3 right-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="25" viewBox="983 65 38 25"><g data-name="Polygon 1"><path d="m1002 90-19-25h38z" fill="#205164" fill-rule="evenodd"/><path d="m19 0 19 25H0z" stroke-linejoin="round" stroke-linecap="round" stroke="#707070" fill="transparent" transform="matrix(-.97368 0 0 -.96 1020.5 89.5)"/></g></svg>
          </div>
        </div>
        <div className="flex items-center md:mr-[220px] relative">
          <div className="hidden md:flex lg:hidden xl:flex">
            <div className="mr-[30px] lg:mr-[20px] xl:mr-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="27.199" height="20.049" viewBox="1538.8 38.95 27.199 20.049"><g data-name="1"><path d="M1540.41 58.999c-.428 0-.816-.165-1.105-.434l7.924-6.792 2.77 2.426 2.773-2.426 7.918 6.792c-.287.269-.675.434-1.102.434h-19.178Zm13.057-7.874 7.732-6.726v13.297l-7.732-6.57Zm-14.667-6.72 7.733 6.72-7.733 6.571V44.404Zm.509-.97c.288-.27.675-.436 1.101-.436h19.178c.43 0 .818.165 1.106.433L1550 52.6l-10.691-9.163Z" fill="#fff" fill-rule="evenodd" data-name="Icon-Mail"/><g data-name="Circle"><path d="M1557 43.9a4 4 0 1 1 0 .1z" fill="#7f63f4" fill-rule="evenodd"/><path d="M1556 43.887a5 5 0 1 1 0 .125z" stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#f0f0f0" fill="transparent"/></g></g></svg>
            </div>
            <div className="mr-[30px] lg:mr-[20px] xl:mr-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24.05" viewBox="1597 36.95 22 24.05"><g data-name="2"><g data-name="Icon-Notification"><g data-name="Icon-Notification"><g data-name="Group 1"><path d="M1607 61c1.292 0 2.35-1.033 2.35-2.302h-4.705c0 1.27 1.062 2.302 2.355 2.302Zm7.645-6.9v-6.324c0-3.567-2.47-6.441-5.882-7.243v-.81c0-.919-.821-1.723-1.763-1.723s-1.763.804-1.763 1.724v.81c-3.413.8-5.882 3.675-5.882 7.242V54.1L1597 56.402v1.15h20v-1.15l-2.355-2.303Zm0 0" fill-rule="evenodd" data-name="Path 1"/></g></g><path d="M1604.644 58.699h4.705c0 1.269-1.057 2.301-2.349 2.301-1.294 0-2.356-1.032-2.356-2.301ZM1597 57.553v-1.15l2.355-2.303v-6.323c0-3.567 2.469-6.442 5.883-7.244v-.809c0-.92.821-1.724 1.762-1.724.942 0 1.763.804 1.763 1.724v.81c3.412.801 5.881 3.676 5.881 7.243V54.1l2.355 2.302v1.151h-20Z" fill="#fff" fill-rule="evenodd" data-name="Color Overlay"/></g><g data-name="Circle"><path d="M1610 41.9a4 4 0 1 1 0 .1z" fill="#7f63f4" fill-rule="evenodd"/><path d="M1609 41.887a5 5 0 1 1 0 .125z" stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#f0f0f0" fill="transparent"/></g></g></svg>
            </div>
            <div className="mr-[30px] lg:mr-[20px] xl:mr-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="21.415" height="20.731" viewBox="1547.57 63.137 21.415 20.731"><path d="m1548.253 83.39 1.87-2.946 1.109-.897.211.213 3.716-3.717.925.912-3.722 3.722.213.216-.896 1.106-2.947 1.868-.48-.478Zm15.96-.186-10.64-10.64-.015-.013a4.571 4.571 0 0 1-4.65-1.112 4.558 4.558 0 0 1-1.179-4.423l2.585 2.584 2.536-.678.679-2.533-2.587-2.586a4.567 4.567 0 0 1 4.426 1.175 4.57 4.57 0 0 1 1.166 4.461l10.727 10.716a2.157 2.157 0 0 1-1.524 3.682 2.158 2.158 0 0 1-1.524-.633Zm.89-1.185a.822.822 0 1 0 1.644 0 .823.823 0 0 0-1.644 0Zm-5.627-11.529c.309-.45.44-.981.38-1.502l5.852-5.851 3.277 3.276-5.85 5.852a2.228 2.228 0 0 0-1.484.366l-2.175-2.14Z" fill="#fff" fill-rule="evenodd" data-name="Settings Icon"/></svg>
            </div>
            <div className="mr-[30px] lg:mr-[20px] xl:mr-[30px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16.015" height="17.008" viewBox="1598.985 66.859 16.015 17.008"><path d="M1598.985 75.735c0-1.726.527-3.375 1.522-4.77a.368.368 0 0 1 .496-.1l2.092 1.31c.088.055.15.145.169.248a.378.378 0 0 1-.064.295 4.77 4.77 0 0 0-.89 2.788c0 2.623 2.1 4.755 4.683 4.755 2.58 0 4.681-2.132 4.681-4.755 0-1.01-.307-1.974-.89-2.788a.382.382 0 0 1 .107-.543l2.091-1.31a.367.367 0 0 1 .495.1 8.153 8.153 0 0 1 1.523 4.77c0 4.484-3.593 8.132-8.007 8.132-4.416 0-8.008-3.648-8.008-8.132Zm6.694.755v-5.358l-1.308.885a.366.366 0 0 1-.382.019.377.377 0 0 1-.196-.332V69.15c0-.127.062-.244.166-.314l2.828-1.914a.366.366 0 0 1 .412 0l2.828 1.914c.102.07.164.188.164.314v2.553c0 .14-.074.266-.195.332a.366.366 0 0 1-.382-.019l-1.307-.885v5.358c0 .736-.59 1.335-1.314 1.335a1.326 1.326 0 0 1-1.314-1.335Z" fill="#fff" fill-rule="evenodd" data-name="Shape 1"/></svg>
            </div>
          </div>
          <div className="hidden md:flex absolute -right-[120px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="139" height="139" viewBox="1646 5 139 139"><g data-name="Path 3"><path d="M1715.5 5c38.384 0 69.5 31.116 69.5 69.5s-31.116 69.5-69.5 69.5-69.5-31.116-69.5-69.5S1677.116 5 1715.5 5Z" fill="#fff" fill-rule="evenodd"/><path d="M1715.5 6c37.832 0 68.5 30.668 68.5 68.5s-30.668 68.5-68.5 68.5-68.5-30.668-68.5-68.5S1677.668 6 1715.5 6Z" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.97122" stroke="#205164" fill="transparent"/></g></svg>
          </div>
          <div className="absolute right-2 md:-right-[190px] cursor-pointer" onClick={() => toggleSidebar()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="26" viewBox="1824 58.865 62 26"><g data-name="CompositeLayer"><path d="M1824 71.865h62" stroke-linejoin="round" stroke-linecap="round" stroke-width="5" stroke="#fff" fill="transparent" data-name="Line 2"/><path d="M1824 58.865h62" stroke-linejoin="round" stroke-linecap="round" stroke-width="5" stroke="#fff" fill="transparent" data-name="Line 1"/><path d="M1824 84.865h62" stroke-linejoin="round" stroke-linecap="round" stroke-width="5" stroke="#fff" fill="transparent" data-name="Line 3"/></g></svg>
          </div>
        </div>
      </div>
      <div className="min-h-screen my-[21px] ml-4 bg-[#f8fcf5] border-[1px] border-[#707070] pt-[32px] rounded-[7px]">
        <div className="ml-[37px] relative">
          <div className="mr-[17px] absolute -top-5 md:-top-3 -left-4 m-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="-0.061 -0.379 66 66"><path d="M-.06 32.57a33 33 0 1 1 0 .1z" fill="#205164" fill-rule="evenodd" data-name="Ellipse 1"/></svg>
          </div>
          <div className="text-[18px] md:text-[23px] font-bold text-[#145365] ml-16">User Name / Inquire Title</div>
          <div className="">
            <div className="bg-[#edf6fa] text-[14px] md:text-[23px] text-[#363B45] border-[2px] border-[#205164] w-[280px] md:w-[400px] lg:w-[484px] rounded-tr-[12px] pt-[22px] pb-[36px] flex justify-center items-center">Show me Numbers Generators Options</div>
          </div> 
          <div className="border-b-[1px] border-[#e3c5c5] mt-[39px] w-[97%] flex items-center m-auto bg-[#edf6fa]"></div>
          <div className="mt-[40px] flex justify-between lg:ml-0 xl:ml-[20px] 2xl:ml-[60px] 3xl:ml-[100px]">
            <div>
              <div className="text-[8px] md:text-[18px] text-[#464a53]">Here Is All Number Generators Options</div>
              <div className="text-[#abafb3] text-[8px] md:text-[10px] 3xl:text-[13px]">MS, ML, QN, DS, LF and DP</div>  
            </div>
            <div className="text-[8px] md:text-[18px] 3xl:text-[23px] font-bold text-[#716565] mr-[19px]">Bot response</div>
          </div>
        </div>
        <div className="mt-[14px] flex flex-col xl:flex-row justify-between">
          <div className="w-[280px] md:w-[657px] lg:w-[557px] xl:w-[385px] 2xl:w-[440px] 3xl:w-[657px] bg-white ml-[20px] xl:ml-[60px] 2xl:ml-[100px] 3xl:ml-[140px] rounded-[3px] pb-[30px]">
            <div className="text-[14px] text-[#464a53] mb-[24px] mt-[23px] ml-[25px]">Title</div>
            <div className="ml-[25px]">
              <div className="flex">
                <div className="mr-[17px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="-0.061 -0.379 66 66"><path d="M-.06 32.57a33 33 0 1 1 0 .1z" fill="#205164" fill-rule="evenodd" data-name="Ellipse 1"/></svg>
                </div>
                <div className="">
                  <div className="text-[10px] 3xl:text-[13px] text-[#464a53]">Fletch Skinner</div>
                  <div className="text-[#abafb3] text-[12px] 3xl:text-[16px] mt-[14px] mr-2">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                  </div>
                </div>
              </div>
              <div className="flex mt-[12px]">
                <div className="mr-[17px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="-0.061 -0.379 66 66"><path d="M-.06 32.57a33 33 0 1 1 0 .1z" fill="#205164" fill-rule="evenodd" data-name="Ellipse 1"/></svg>
                </div>
                <div className="">
                  <div className="text-[10px] 3xl:text-[13px] text-[#464a53]">Fletch Skinner</div>
                  <div className="text-[#abafb3] text-[12px] 3xl:text-[16px] mt-[14px] mr-2">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                  </div>
                </div>
              </div>
              <div className="flex mt-[12px]">
                <div className="mr-[17px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="-0.061 -0.379 66 66"><path d="M-.06 32.57a33 33 0 1 1 0 .1z" fill="#205164" fill-rule="evenodd" data-name="Ellipse 1"/></svg>
                </div>
                <div className="">
                  <div className="text-[10px] 3xl:text-[13px] text-[#464a53]">Fletch Skinner</div>
                  <div className="text-[#abafb3] text-[12px] 3xl:text-[16px] mt-[14px] mr-2">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[20px] mt-2 xl:mt-0 xl:ml-0 w-[280px] md:w-[657px] lg:w-[557px] xl:w-[385px] 2xl:w-[440px] 3xl:w-[657px] bg-white rounded-[3px] pb-[30px] mr-[25px]">
            <div className="text-[14px] text-[#464a53] mb-[24px] mt-[23px] ml-[25px]">Title</div>
            <div className="ml-[25px]">
              <div className="flex">
                <div className="mr-[17px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="-0.061 -0.379 66 66"><path d="M-.06 32.57a33 33 0 1 1 0 .1z" fill="#205164" fill-rule="evenodd" data-name="Ellipse 1"/></svg>
                </div>
                <div className="">
                  <div className="text-[10px] 3xl:text-[13px] text-[#464a53]">Fletch Skinner</div>
                  <div className="text-[#abafb3] text-[12px] 3xl:text-[16px] mt-[14px] mr-2">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                  </div>
                </div>
              </div>
              <div className="flex mt-[12px]">
                <div className="mr-[17px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="-0.061 -0.379 66 66"><path d="M-.06 32.57a33 33 0 1 1 0 .1z" fill="#205164" fill-rule="evenodd" data-name="Ellipse 1"/></svg>
                </div>
                <div className="">
                  <div className="text-[10px] 3xl:text-[13px] text-[#464a53]">Fletch Skinner</div>
                  <div className="text-[#abafb3] text-[12px] 3xl:text-[16px] mt-[14px] mr-2">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                  </div>
                </div>
              </div>
              <div className="flex mt-[12px]">
                <div className="mr-[17px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="-0.061 -0.379 66 66"><path d="M-.06 32.57a33 33 0 1 1 0 .1z" fill="#205164" fill-rule="evenodd" data-name="Ellipse 1"/></svg>
                </div>
                <div className="">
                  <div className="text-[10px] 3xl:text-[13px] text-[#464a53]">Fletch Skinner</div>
                  <div className="text-[#abafb3] text-[12px] 3xl:text-[16px] mt-[14px] mr-2">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[28px] 3xl:mt-[83px]">
          <div className="w-[300px] lg:w-[456px] h-[44px] bg-white rounded-[15px] m-auto">
            <div className="flex justify-center items-center h-full">
              <div className="w-[8px] h-[8px] bg-black mr-2"></div>
              <div className="w-[8px] h-[8px] bg-black mr-2"></div>
              <div className="w-[8px] h-[8px] bg-black"></div>
            </div>
          </div>
          <div className="text-[#363b45] text-[12px] 3xl:text-[16px] flex justify-center items-center mt-[8px] mb-[11px]">Bot is Typing</div>
        </div>
      </div>
      <div className="ml-[15px] flex justify-between">
        <div className="text-[18px] md:text-[22px] 3xl:text-[30px] text-[#707070] h-[50px] md:h-[88px] flex items-center border-[1px] border-[#707070] rounded-[30px] w-[99%] md:w-[85%] lg:w-[90%] 3xl:w-[92%] flex flex-cols justify-between">
          <div className="ml-[38px]">Type you inquire here</div>
          <div className="hidden md:flex pr-[29px]">
            <div className="mr-[36px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="23.022" height="24.233" viewBox="-0.7 -0.7 23.022 24.233"><path d="m23.022 12.117-10.196 9.965a7.603 7.603 0 0 1-5.313 2.152C3.363 24.234 0 20.945 0 16.89a7.26 7.26 0 0 1 2.2-5.193L12.7 1.434A5.068 5.068 0 0 1 16.242 0c2.766 0 5.009 2.192 5.009 4.896a4.841 4.841 0 0 1-1.467 3.462L9.588 18.324c-.47.459-1.107.717-1.771.717-1.383 0-2.504-1.096-2.504-2.448 0-.65.264-1.272.733-1.731l9.892-9.67" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.4" stroke="#205164" fill="transparent" data-name="ic"/></svg>
            </div>
            <div className="mr-[36px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24.234" height="24.234" viewBox="1677.138 1007 24.234 24.234"><g data-name="CompositeLayer"><path d="M1699.64 1007h-20.771c-1.731.775-.956 0 0 0-1.731 1.731-1.731 22.503-1.731 22.503 0 .956.775 1.73 1.731 1.73h20.772a1.73 1.73 0 0 0 1.73-1.73v-20.772a1.73 1.73 0 0 0-1.73-1.73Z" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.4" stroke="#205164" fill="transparent" data-name="ic"/><path d="m1701.372 1022.567-5.193-5.189-5.193 5.19-6.924-8.65-6.924 8.66" stroke-linejoin="round" stroke-linecap="round" stroke-width="1.4" stroke="#205164" fill="transparent" data-name="ic"/></g></svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18.175" height="24.233" viewBox="119.653 0.001 18.175 24.233"><g data-name="ic"><g data-name="Vector"><path d="M128.74 15.752a4.987 4.987 0 0 1-3.503-1.422 4.762 4.762 0 0 1-1.453-3.424v-6.06c0-1.294.516-2.51 1.452-3.426A4.98 4.98 0 0 1 128.74 0a4.98 4.98 0 0 1 3.505 1.42 4.761 4.761 0 0 1 1.452 3.427v6.059a4.762 4.762 0 0 1-1.453 3.424 4.987 4.987 0 0 1-3.504 1.422Zm0-14.136c-.884 0-1.714.336-2.336.946a3.174 3.174 0 0 0-.968 2.285v6.059c0 .863.344 1.674.968 2.284a3.365 3.365 0 0 0 2.336.946c.87 0 1.722-.344 2.337-.946.624-.61.968-1.421.968-2.284v-6.06c0-.862-.344-1.674-.968-2.284a3.315 3.315 0 0 0-2.337-.946Z" fill="#afb5c0" fill-rule="evenodd"/><path d="M128.74 15.752a4.987 4.987 0 0 1-3.503-1.422 4.762 4.762 0 0 1-1.453-3.424v-6.06c0-1.294.516-2.51 1.452-3.426A4.98 4.98 0 0 1 128.74 0a4.98 4.98 0 0 1 3.505 1.42 4.761 4.761 0 0 1 1.452 3.427v6.059a4.762 4.762 0 0 1-1.453 3.424 4.987 4.987 0 0 1-3.504 1.422Zm0-14.136c-.884 0-1.714.336-2.336.946a3.174 3.174 0 0 0-.968 2.285v6.059c0 .863.344 1.674.968 2.284a3.365 3.365 0 0 0 2.336.946c.87 0 1.722-.344 2.337-.946.624-.61.968-1.421.968-2.284v-6.06c0-.862-.344-1.674-.968-2.284a3.315 3.315 0 0 0-2.337-.946Z" stroke-linejoin="round" stroke-linecap="round" stroke="#205164" fill="transparent"/></g><g data-name="Vector"><path d="M136.176 8.078v2.827c0 4.009-3.336 7.27-7.436 7.27s-7.435-3.261-7.435-7.27V8.078h-1.652v2.827c0 4.627 3.636 8.44 8.261 8.849v4.48h1.652v-4.48c4.626-.41 8.262-4.222 8.262-8.849V8.078h-1.652Z" fill="#afb5c0" fill-rule="evenodd"/><path d="M136.176 8.078v2.827c0 4.009-3.336 7.27-7.436 7.27s-7.435-3.261-7.435-7.27V8.078h-1.652v2.827c0 4.627 3.636 8.44 8.261 8.849v4.48h1.652v-4.48c4.626-.41 8.262-4.222 8.262-8.849V8.078h-1.652Z" stroke-linejoin="round" stroke-linecap="round" stroke="#205164" fill="transparent"/></g></g></svg>
            </div>
          </div>
        </div>
        <div className="mr-1 hidden md:flex">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="-0.5 -0.5 85 85"><g data-name="Rectangle 9"><path d="M0 42.5C0 19.028 19.028 0 42.5 0S85 19.028 85 42.5 65.972 85 42.5 85 0 65.972 0 42.5Z" fill="#205164" fill-rule="evenodd"/><path d="M0 42.5C0 19.028 19.028 0 42.5 0c0 0 0 0 0 0C65.972 0 85 19.028 85 42.5c0 0 0 0 0 0C85 65.972 65.972 85 42.5 85c0 0 0 0 0 0C19.028 85 0 65.972 0 42.5c0 0 0 0 0 0Z" stroke-linejoin="round" stroke-linecap="round" stroke="#205164" fill="transparent"/></g></svg>
            <div className="absolute top-8 left-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="23.999" height="23.928" viewBox="30 30.097 23.999 23.928"><g data-name="ic"><path d="M44.143 54.525a.808.808 0 0 1-.69-.389l-4.285-7.12 15.17-15.125a.792.792 0 0 0 .161-.23l-9.62 22.38a.8.8 0 0 1-.736.484Zm-6.11-8.64v-.001L30.89 41.61a.796.796 0 0 1-.388-.74.795.795 0 0 1 .484-.68l22.452-9.594a.815.815 0 0 0-.235.162l-15.17 15.125Z" fill="#fff" fill-rule="evenodd"/><path d="M44.143 54.525a.808.808 0 0 1-.69-.389l-4.285-7.12 15.17-15.125a.792.792 0 0 0 .161-.23l-9.62 22.38a.8.8 0 0 1-.736.484Zm-6.11-8.64v-.001L30.89 41.61a.796.796 0 0 1-.388-.74.795.795 0 0 1 .484-.68l22.452-9.594a.815.815 0 0 0-.235.162l-15.17 15.125h0Z" stroke-linejoin="round" stroke-linecap="round" stroke="#205164" fill="transparent"/></g></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MainContainer
