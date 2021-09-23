import React from 'react'

const Planet = props => {
    return (
        <div className="planet">
            <h2>{props.planet.planetName}</h2>
            <p>{props.planet.planetDescription}</p><span>{props.planet.population} people</span>
        </div>
    )
}

export default Planet;