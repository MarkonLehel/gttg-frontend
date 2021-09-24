import React, { useEffect, useState, createContext } from 'react';

export const TripContext = createContext();

export const TripProvider = (props) => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('https://localhost:44300/api/trip')
        .then(async res => {
            const newTrips = await res.json();
            setTrips( prevTrips =>([ ...prevTrips, ...newTrips]) )})
            .catch(err => console.log("fetch", err))
    }, [])

    return(
        <TripContext.Provider value={{trips, setTrips}}>
            {props.children}
        </TripContext.Provider>
    );
}