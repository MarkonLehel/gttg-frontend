import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Event from './Event';

const EventList = props => {
    // const [events, setEvents] = useState({})
    const events = ["res","res","res","res"];

    // useEffect(() => {
    //     axios.get('https://localhost:5001/api/Event')
    //         .then(res => setEvents( res ))
    // }, [])

    return (
        <div id="events">
            {events.map(event => 
                <Event event={event}/>
            )}
        </div>
    )
}

export default  EventList;