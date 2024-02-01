import React from 'react';
import './loading-screen.style.scss'
import { HashLoader } from 'react-spinners';

function LoadingScreen() {
    return (
        <div className='loading-screen'>
            <HashLoader size={100} color="#36d7b7" />
        </div>
    )
}

export default LoadingScreen