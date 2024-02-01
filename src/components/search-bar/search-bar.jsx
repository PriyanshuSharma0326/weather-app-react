import React, { useContext, useEffect, useState } from 'react';
import './search-bar.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../features/weatherSlice'
import { AppContext } from '../../context/appContext';

export default function SearchBar() {
    const [inputText, setInputText] = useState('');
    const error = useSelector((state) => state.weather.error);
    const { errorText, setErrorText } = useContext(AppContext);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    useEffect(() => {
        error?.length > 0 ? setErrorText('Enter a valid search name') : setErrorText('');
    }, [error]);

    const handleKeyDown = async (e) => {
        if(inputText.length && e.key === 'Enter') {
            dispatch(fetchWeather(inputText));
        }
    }

    const handleClick = () => {
        inputText.length && dispatch(fetchWeather(inputText));
    }

    return (
        <div className='search-bar-container'>
            <input 
                onChange={handleChange} 
                onKeyDown={handleKeyDown} 
                placeholder='Search Location' 
                value={inputText} 
            />
            <button onClick={handleClick}>
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
            </button>

            {errorText.length > 0 && <div className="error-text">
                <p>{errorText}</p>
            </div>}
        </div>
    );
}
