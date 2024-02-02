import React, { useContext } from 'react';
import './forecast-box.style.scss';
import { capitalizeEachWord, celsiusToFahrenheit, formatDate } from '../../lib/utils/utils';
import { AppContext } from '../../context/appContext';

function ForecastBox({forecast}) {
    const { celsius } = useContext(AppContext);

    return (
        <div className='forecast-box-container'>
            <h2 className="forecast-date">
                {formatDate(forecast.date_txt)}
            </h2>

            <div className="weather-icon-container">
                <img src={forecast.weatherIconURL} alt={forecast.weatherDescription} />
            </div>

            <div className="weather-data">
                <h2>{celsius ? parseInt(forecast.temperature) : parseInt(celsiusToFahrenheit(forecast.temperature))}°<span>{celsius ? 'C' : 'F'}</span></h2>

                <p>{capitalizeEachWord(forecast.weatherDescription)}</p>
            </div>
        </div>
    )
}

export default ForecastBox;
