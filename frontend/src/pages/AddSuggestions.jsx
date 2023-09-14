import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../AddSuggestions.css';
import RestaurantList from './RestaurantList'; // Import RestaurantList component
import SuggestionForm from './SuggestionForm'; // Import SuggestionForm component

const AddSuggestions = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [suggestion, setSuggestion] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  // Function to load Google Maps script
  const loadGoogleMapsScript = () => {
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
  };

  useEffect(() => {
    loadGoogleMapsScript();
  }, []);

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
  };

  return (
    <div className='p-4'>
      <BackButton />
      <RestaurantList restaurants={restaurants} setSuggestion={setSuggestion} />
      <h1 className='text-3xl my-4'>Add Suggestion</h1>
      <SuggestionForm
        suggestion={suggestion}
        name={name}
        setSuggestion={setSuggestion}
        setName={setName}
        handleSaveSuggestion={handleSaveSuggestion}
      />
    </div>
  );
};

export default AddSuggestions;