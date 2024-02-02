import React, { useContext } from 'react';
import './main.style.scss';
import SearchBar from '../search-bar/search-bar';
import WeatherCard from '../weather-card/weather-card';
import ForecastCard from '../forecast-card/forecast-card';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import { AppContext } from '../../context/appContext';

function Main() {
    const { setCelsius } = useContext(AppContext);
    const celsius = JSON.parse(localStorage.getItem('celsius'));

    const toggleCelsius = () => {
        const newCelsius = !celsius;
        setCelsius(newCelsius);
        localStorage.setItem('celsius', JSON.stringify(newCelsius));
    };

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
                    onChange={toggleCelsius}
                />
                <span>Use Celsius</span>
            </label>
        </div>
    )
}

export default Main;
