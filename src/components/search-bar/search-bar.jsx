import React from 'react';
import './search-bar.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(props) {
    return (
        <div className='search-bar-container mt-8 relative px-4 md:pt-12 md:px-40 lg:px-80'>
            <input 
                onChange={props.handleChange} 
                onKeyDown={props.handleKeyDown} 
                placeholder='Search Location' 
                value={props.inputTextValue}
            />
            <div className='icon absolute top-0 right-4 md:top-12 md:right-40 lg:right-80'>
                <button onClick={props.handleClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </div>
    );
}