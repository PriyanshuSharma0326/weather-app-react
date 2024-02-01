import React from 'react';
import './weather-card.style.scss';
import { faDroplet, faLocationDot, faTemperatureFull, faTemperatureHalf, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { capitalizeEachWord, celsiusToFahrenheit } from '../../lib/utils/utils';

function WeatherCard() {
    const weatherData = useSelector((state) => state.weather.weather);
    const celsius = JSON.parse(localStorage.getItem('celsius'));

    return (
        <div className='weather-card-container'>
            <div className="location">
                <FontAwesomeIcon icon={faLocationDot} className='icon' />
                <h2>{weatherData.location}</h2>
            </div>

            <div className="weather-info">
                <div className="weather-icon">
                    <img src={weatherData.weatherIconURL} alt={weatherData.weatherDescription} />
                </div>

                <div className="temperature">
                    <h2>{celsius ? parseInt(weatherData.temperature) : parseInt(celsiusToFahrenheit(weatherData.temperature))}°<span>{celsius ? 'C' : 'F'}</span></h2>
                </div>
            </div>

            <div className="weather-description">
                <p>{capitalizeEachWord(weatherData.weatherDescription)}</p>
            </div>

            <div className="weather-highlights">
                <div className="min-max-temperature">
                    <div className="max">
                        <p><FontAwesomeIcon className='icon' icon={faTemperatureFull} />Max: </p>
                        <h2>{celsius ? parseInt(weatherData.maxTemperature) : parseInt(celsiusToFahrenheit(weatherData.maxTemperature))}°<span>{celsius ? 'C' : 'F'}</span></h2>
                    </div>
                    <div className="min">
                        <p><FontAwesomeIcon className='icon' icon={faTemperatureHalf} />Min: </p>
                        <h2>{celsius ? parseInt(weatherData.minTemperature) : parseInt(celsiusToFahrenheit(weatherData.minTemperature))}°<span>{celsius ? 'C' : 'F'}</span></h2>
                    </div>
                </div>

                <div className="humidity">
                    <p><FontAwesomeIcon className='icon' icon={faDroplet} />Humidity</p>
                    <h2>{weatherData.humidity}<span>%</span></h2>
                </div>

                <div className="wind-speed">
                    <p><FontAwesomeIcon className='icon' icon={faWind} />Wind Status</p>
                    <h2>{weatherData.windSpeed}<span>m/s</span> <span>&#40;{weatherData.windDirection}&#41;</span></h2>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;
