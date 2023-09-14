// RestaurantList.js
import React from 'react';

function RestaurantList({ restaurants, setSuggestion }) {
  return (
    <div>
      <h1 className='list-header'>Nearby Suggestions</h1>
      <ul className="list-container" id="app">
        {restaurants.map((restaurant, index) => (
          <li
            className="list-item"
            key={index}
            onClick={() => setSuggestion(restaurant.name)}
          >
            {restaurant.name}
          </li>
        ))}
      </ul>
      <div id="map" style={{ height: '400px' }}></div>
    </div>
  );
}

export default RestaurantList;
