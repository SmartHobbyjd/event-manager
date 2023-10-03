import React from "react";
import EventButton from "./EventButton";
const DateBox = ({number, events}) =>{
    return (
        <td className="border p-1 h-[10%] w-[14%] overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
        <div className="flex flex-col h-[100%] mx-auto xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-full mx-auto overflow-hidden">
          <div className="top h-5 w-full">
            <span className="text-gray-500">{number}</span>
          </div>
          <div className="bottom h-30 py-1 w-[100%] cursor-pointer">
            {events.length > 0 ? events.map((event)=>{
                return(
                    <EventButton event={event} />
                )
            }) : null}
          </div>
        </div>
      </td>
    )
}

export default DateBox