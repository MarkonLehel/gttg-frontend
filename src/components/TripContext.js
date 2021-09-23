import React, { useEffect, useState, createContext} from 'react';
import axios from 'axios';

export const TripContext = createContext();

export const TripProvider = (props) => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get('https://localhost:5001/api/Trip')
            .then(res => {
                console.log(res)
                setTrips( prevTrips =>({ ...prevTrips, res}) )})
    }, [])

    return(
        <TripContext.Provider value={{trips, setTrips}}>
            {props.children}
        </TripContext.Provider>
    );
}