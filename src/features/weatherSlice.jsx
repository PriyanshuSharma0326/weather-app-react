import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { degreesToDirection, filterUniqueDates, getForecastInformation, getWeatherInformation } from '../lib/utils/utils';

const initialStateValue = {
    weather: [],
    loading: 'idle',
    error: null,
};

const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
    const response = await getWeatherInformation('Delhi');
    const forecastData = await getForecastInformation('Delhi');

    const forecastResponse = filterUniqueDates(forecastData.list);

    console.log(forecastResponse);
    const forecast = [];

    forecastResponse.forEach(item => {
        forecast.push({
            date: item.dt,
            date_txt: item.dt_txt,
            weatherIconURL: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
            temperature: item.main.temp,
            weatherDescription: item.weather[0].main,
        });
    });

    const weatherData = {
        location: `${response.name}, ${response.sys.country}`,
        temperature: response.main.temp,
        minTemperature: response.main.temp_min,
        maxTemperature: response.main.temp_max,
        humidity: response.main.humidity,
        windSpeed: response.wind.speed,
        windDirection: degreesToDirection(response.wind.deg),
        weatherDescription: response.weather[0].description,
        weatherIconURL: `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
        forecast: forecast,
    }

    return weatherData;
});

const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialStateValue,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchWeather.pending, (state) => {
            state.loading = 'loading';
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.weather = action.payload;
        })
        .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    },
});

export default weatherSlice.reducer;

export { fetchWeather };
