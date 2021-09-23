import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Planet from './Planet';

const PlanetList = props => {
    // const [planets, setPlanets] = useState({})
    const planets = ["res","res","res","res"];

    // useEffect(() => {
    //     axios.get('https://localhost:5001/api/Planet')
    //         .then(res => setPlanets( res ))
    // }, [])
    
    return (
        <div id="planets">
            {planets.map(planet => 
                <Planet planet={planet}/>
            )}
        </div>
    )
}

export default PlanetList;