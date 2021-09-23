import React, { useEffect, useState, createContext} from 'react';
import axios from 'axios';

export const PlanetContext = createContext();

export const PlanetProvider = (props) => {
    const [planets, setPlanets] = useState([])

    // const planets = ["res","res","res","res"];

    useEffect(() => {
        axios.get('https://localhost:5001/api/planet')
            .then(res => {
                console.log(res)
                setPlanets( prevPlanets =>({ ...prevPlanets, res}) )})
    }, [])

    const topFive = [planets.filter(planet => planet.reputation)]

    return(
        <PlanetContext.Provider value={{planets, setPlanets, topFive}}>
            {props.children}
        </PlanetContext.Provider>
    );
}