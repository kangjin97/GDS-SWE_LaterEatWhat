import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../AddSuggestions.css';


const addSuggestion = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [suggestion, setSuggestion] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const handleSaveSuggestion = () => {
        const data = {
            suggestion,
            name,
        };
        axios
            .post('http://localhost:5555/suggest', data)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                alert('Please fill in all the required fields');
                console.log(error);
            });
    }

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
        <div className='p-4'>
            <BackButton />
            <div>
                <h1 className='list-header'>Nearby Suggestions</h1>
                <ul className="list-container" id="app">
                    {restaurants.map((restaurant) => (
                        <li className="list-item" key={restaurant.index} onClick={() => setSuggestion(restaurant.name)}>{restaurant.name}</li>
                    ))}
                </ul>
                <div id="map" style={{ height: '400px' }}></div>
            </div>
            <h1 className='text-3xl my-4'>Add Suggestion</h1>
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-grey-500'>Suggestion</label>
                    <input type="text"
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        className='border-2 border-grey-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-grey-500'>Name</label>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='border-2 border-grey-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveSuggestion}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default addSuggestion