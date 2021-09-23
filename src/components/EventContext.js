import React, { useEffect, useState, createContext} from 'react';
import axios from 'axios';

export const EventContext = createContext();

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get('https://localhost:5001/api/Event')
            .then(res => {
                console.log(res)
                setEvents( prevEvents =>({ ...prevEvents, res}) )})
    }, [])

    return(
        <EventContext.Provider value={{events, setEvents}}>
            {props.children}
        </EventContext.Provider>
    );
}