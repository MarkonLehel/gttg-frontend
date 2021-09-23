import React from 'react'

const Planet = props => {
    return (
        <div className="planet">
            <h1>{props.planet.name}</h1>
        </div>
    )
}

export default Planet;