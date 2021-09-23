import React from 'react'

const Event = props => {
    return (
        <div className="event">
            <h1>{props.event.name}</h1>
        </div>
    )
}

export default Event;