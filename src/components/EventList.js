import React, { useContext } from 'react';
import Event from './Event';
import { EventContext } from './EventContext';

const EventList = props => {
    const [events, setEvents] = useContext(EventContext)

    return (
        <div id="events">
            {events.map(event => 
                <Event event={event}/>
            )}
        </div>
    )
}

export default  EventList;