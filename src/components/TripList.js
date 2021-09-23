import React, { useContext } from 'react'
import { TripContext } from './TripContext';
import Trip from './Trip';

const TripList = props => {
    const {trips, setTrips} = useContext(TripContext)

    return (
        <div id="events">
            {trips.map(trip => 
                <Trip trip={trip} />
            )}
        </div>
    )
}

export default TripList;