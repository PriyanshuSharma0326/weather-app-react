import React from 'react';
import './forecast-card.style.scss';
import { useSelector } from 'react-redux';
import ForecastBox from '../forecast-box/forecast-box';

function ForecastCard() {
    const weatherData = useSelector((state) => state.weather.weather);

    return (
        <div className='forecast-card-container'>
            <h2 className="forecast-title">5 days Forecast</h2>

            <div className="forecast-list">
                {weatherData?.forecast.map((forecast) => {
                    return (
                        <ForecastBox 
                            key={forecast.date} 
                            forecast={forecast}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ForecastCard;
