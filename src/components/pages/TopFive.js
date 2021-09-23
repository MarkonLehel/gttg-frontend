import React, { useContext } from 'react'
import Planet from '../Planet';
import { PlanetContext } from '../PlanetContext';

const TopFive = props => {
    const { topFive } = useContext(PlanetContext)

    return (
        <div id="top-five">
            {topFive.map(planet => 
                <Planet planet={planet}/>
            )}
        </div>
    )
}

export default  TopFive;