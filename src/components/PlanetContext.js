import React, { useEffect, useState, createContext} from 'react';

export const PlanetContext = createContext();

export const PlanetProvider = (props) => {
    const [planets, setPlanets] = useState([])

    // const planets = ["res","res","res","res"];

    useEffect(() => {
        fetch('https://localhost:44300/api/planet')
        .then(async res => {
            const newPlanets = await res.json();
            setPlanets( prevPlanets =>([ ...prevPlanets, ...newPlanets]) )})
            .catch(err => console.log("fetch", err))
    }, [])

    // const topFive = [planets.filter(planet => planet.reputation)]

    return (
        <PlanetContext.Provider value={{planets, setPlanets }}>
            {props.children}
        </PlanetContext.Provider>
    );
}