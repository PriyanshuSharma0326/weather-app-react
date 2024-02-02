import React, { useContext, useEffect } from "react";
import Main from "./components/main/main";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './features/weatherSlice';
import LoadingScreen from "./components/loading-screen/loading-screen";
import { AppContext } from "./context/appContext";

export default function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.weather.loading);
    const { setCelsius } = useContext(AppContext);

    useEffect(() => {
        const isCelsiusSet = localStorage.getItem('celsius');
        if (!isCelsiusSet) {
            localStorage.setItem('celsius', 'true');
            setCelsius(true);
        }
        else {
            setCelsius(JSON.parse(isCelsiusSet));
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
