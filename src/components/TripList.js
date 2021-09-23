import React, { useContext } from 'react'
import { TripContext } from './TripContext';
import Trip from './Trip';

const TripList = props => {
    const {trips, setTrips} = useContext(TripContext)
    console.log(trips)

    return (
        <div id="trips">
            {trips.map(trip => 
                <Trip trip={trip} />
            )}
        </div>
    )
}

export default TripList;