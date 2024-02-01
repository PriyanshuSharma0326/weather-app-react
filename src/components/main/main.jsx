import React from 'react';
import './main.style.scss';
import SearchBar from '../search-bar/search-bar';
import WeatherCard from '../weather-card/weather-card';
import ForecastCard from '../forecast-card/forecast-card';
import Toggle from 'react-toggle';
import "react-toggle/style.css"

function Main() {
    const celsius = JSON.parse(localStorage.getItem('celsius'));

    const handleCelsius = () => {
        if(celsius) {
            localStorage.setItem('celsius', 'false');
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
        else {
            localStorage.setItem('celsius', 'true');
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    }

    return (
        <div className='main-container'>
            <SearchBar />

            <div className="cards-container">
                <WeatherCard />

                <ForecastCard />
            </div>

            <label className='toggle'>
                <Toggle
                    defaultChecked={celsius}
                    icons={false} 
                    onChange={handleCelsius}
                />
                <span>Use Celsius</span>
            </label>
        </div>
    )
}

export default Main;
