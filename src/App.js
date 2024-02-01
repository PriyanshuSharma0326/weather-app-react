import React, { useEffect } from "react";
import Main from "./components/main/main";

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './features/weatherSlice';
import LoadingScreen from "./components/loading-screen/loading-screen";
import FailedScreen from "./components/failed-screen/failed-screen";

export default function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.weather.loading);

    useEffect(() => {
        dispatch(fetchWeather());
    }, [dispatch]);

    return (
        <>
            {
                loading !=='succeeded' ? (
                    loading !== 'failed' ? <LoadingScreen /> : <FailedScreen />
                ) : 
                <Main />
            }
        </>
    );
}
