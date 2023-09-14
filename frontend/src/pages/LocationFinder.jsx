// LocationFinder.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../LocationFinder.css';

// Now you can use googleApiKey in your code


const LocationFinder = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAh-z4YrCbmZmiVbana_0Konmlhxu5nz2E&libraries=places&callback=initMap`;
        script.defer = true;
        script.async = true;

        window.initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 1.3372845649719238, lng: 103.84890747070312 },
                zoom: 17,
            });

            const request = {
                location: map.getCenter(),
                radius: '1000',
                type: ['restaurant'],
            };

            const service = new window.google.maps.places.PlacesService(map);

            service.nearbySearch(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setRestaurants(results);
                }
            });
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h1 className='list-header'>Nearby Suggestions</h1>
            <ul className="list-container" id="app">
                {restaurants.map((restaurant) => (
                    <li className="list-item" key={restaurant.index}>{restaurant.name}</li>
                ))}
            </ul>
            <div id="map" style={{ height: '400px' }}></div>
        </div>
    )
}

export default LocationFinder;
