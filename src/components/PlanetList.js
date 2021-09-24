import React, { useContext } from 'react';
import Planet from './Planet';
import { PlanetContext } from './PlanetContext';

const PlanetList = props => {
    const {planets, setPlanets} = useContext(PlanetContext)

    return (
        <div id="planets">
            {planets && planets.map(planet => 
                <Planet planet={planet} key={planet.planetDataID}/>
            )}
        </div>
    )
}

export default PlanetList;