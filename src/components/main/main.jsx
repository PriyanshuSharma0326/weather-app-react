import React from 'react';
import './main.style.scss';
import SearchBar from '../search-bar/search-bar';
import WeatherCard from '../weather-card/weather-card';
import ForecastCard from '../forecast-card/forecast-card';

function Main() {
    return (
        <div className='main-container'>
            <SearchBar />

            <div className="cards-container">
                <WeatherCard />

                <ForecastCard />
            </div>
        </div>
    )
}

export default Main;
