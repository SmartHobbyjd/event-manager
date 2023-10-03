import React from "react";

const EventButton = ({event}) =>{
    return (
        <div
        className="event bg-purple-400 text-white rounded p-1 text-sm mb-1 w-[100%]"
        >
            <span className="event-name">
                Meeting
            </span>
            <span className="time">
                12:00~14:00
            </span>
        </div>

    )
}

export default EventButton