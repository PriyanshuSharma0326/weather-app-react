import React, { useEffect } from "react";
import Main from "./components/main/main";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './features/weatherSlice';
import LoadingScreen from "./components/loading-screen/loading-screen";

export default function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.weather.loading);

    useEffect(() => {
        const isCelsiusSet = localStorage.getItem('celsius');
        if (!isCelsiusSet) {
            localStorage.setItem('celsius', 'true');
        }
        dispatch(fetchWeather('New Delhi'));
    }, [dispatch]);

    return (
        <>
            {loading !=='succeeded' ? (
                loading !== 'failed' ? <LoadingScreen /> : <Main />
            ) : <Main />}
        </>
    );
}
