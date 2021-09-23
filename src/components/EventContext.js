import React, { useEffect, useState, createContext} from 'react';

export const EventContext = createContext();

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://localhost:44300/api/event')
        .then(async res => {
            const newEvents = await res.json();
            setEvents( prevEvents =>([ ...prevEvents, ...newEvents]) )})
            .catch(err => console.log("fetch", err))
    }, [])

    return(
        <EventContext.Provider value={{events, setEvents}}>
            {props.children}
        </EventContext.Provider>
    );
}