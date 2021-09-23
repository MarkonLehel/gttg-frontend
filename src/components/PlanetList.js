import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Planet from './Planet';

const PlanetList = props => {
    const [planets, setPlanets] = useState({})

    useEffect(() => {
        axios.get()
    }, [])
    
    return (
        <div>
            {planets.map(planet => {
                <Planet />
            })}
        </div>
    )
}

export default PlanetList;