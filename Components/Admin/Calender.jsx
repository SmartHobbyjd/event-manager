const { REACT_LOADABLE_MANIFEST } = require("next/dist/shared/lib/constants");
import DateBox from "./CalenderBox";


const Calender = () => {

  const events = [
    {
    name: "Metting",
    time: "12:00~14:00"
    }
  ]
    return (
        <div className="container mx-auto">
        <div className="wrapper bg-white rounded shadow w-full ">
          <div className="header flex justify-between border-b p-2">
            <span className="text-lg font-bold">
              2020 July
            </span>
            <span className="font-normal text[22px] text-[#464a53]">
              March
            </span>
            <div className="buttons flex gap-1">
              <button className="px-4 text-[14px] text-[#34C73B] border border-[#34C73B] rounded">
                Today
              </button>
              <button className="px-3 text-[14px] text-white bg-[#673BB7] border border-[#673BB7] rounded">
                 Day
              </button>
              <button className="px-4 text-[14px] text-white bg-[#FF9800] border border-[#FF9800] rounded">
                 Month
              </button>
              <button className="px-4 text-[14px] text-white bg-[#9C27B0] border border-[#9C27B0] rounded">
                 Week
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Sunday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Monday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Tuesday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Wednesday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Thursday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Friday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">Saturday</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center h-20">
                <DateBox number={1} events={events} />
                <DateBox number={2} events={[]}/>
                <DateBox number={3} events={[]}/>
                <DateBox number={4} events={[]}/>
                <DateBox number={5} events={[]}/>
                <DateBox number={6} events={[]}/>
                <DateBox number={7} events={[]}/>
              </tr>
    
              <tr className="text-center h-20">
                <DateBox number={8} events={[]}/>
                <DateBox number={9} events={[]}/>
                <DateBox number={10} events={[]}/>
                <DateBox number={11} events={[]}/>
                <DateBox number={12} events={[]}/>
                <DateBox number={13} events={[]}/>
                <DateBox number={14} events={[]}/>
              </tr>

              <tr className="text-center h-20">
                <DateBox number={15} events={[]}/>
                <DateBox number={16} events={[]}/>
                <DateBox number={17} events={[]}/>
                <DateBox number={18} events={[]}/>
                <DateBox number={19} events={[]}/>
                <DateBox number={20} events={[]}/>
                <DateBox number={21} events={[]}/>
              </tr>

              <tr className="text-center h-20">
                <DateBox number={22} events={[]}/>
                <DateBox number={23} events={[]}/>
                <DateBox number={24} events={[]}/>
                <DateBox number={25} events={[]}/>
                <DateBox number={26} events={[]}/>
                <DateBox number={27} events={[]}/>
                <DateBox number={28} events={[]}/>
              </tr>

              <tr className="text-center h-20">
                <DateBox number={29} events={[]}/>
                <DateBox number={30} events={[]}/>
                <DateBox number={31} events={[]}/>
                <DateBox number={1} events={[]}/>
                <DateBox number={2} events={[]}/>
                <DateBox number={3} events={[]}/>
                <DateBox number={4} events={[]}/>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default Calender