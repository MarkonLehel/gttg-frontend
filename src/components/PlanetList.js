import React, { useContext } from 'react';
import axios from 'axios';
import Planet from './Planet';
import { PlanetContext } from './PlanetContext';

const PlanetList = props => {
    const {planets, setPlanets} = useContext(PlanetContext)
    
    return (
        <div id="planets">
            {planets.map(planet => 
                <Planet planet={planet}/>
            )}
        </div>
    )
}

export default PlanetList;