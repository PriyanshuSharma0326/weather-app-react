import axios from "axios";

const getWeatherInformation = async (location) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_OPENWEATHER_CURRENT_WEATHER_URL}?q=${location}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

const getForecastInformation = async (location) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_OPENWEATHER_FORECAST_URL}?q=${location}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

const degreesToDirection = (degrees) => {
    degrees = (degrees + 360) % 360;

    const directions = [
        { label: 'North', range: [0, 22.5] },
        { label: 'Northeast', range: [22.5, 67.5] },
        { label: 'East', range: [67.5, 112.5] },
        { label: 'Southeast', range: [112.5, 157.5] },
        { label: 'South', range: [157.5, 202.5] },
        { label: 'Southwest', range: [202.5, 247.5] },
        { label: 'West', range: [247.5, 292.5] },
        { label: 'Northwest', range: [292.5, 337.5] },
        { label: 'North', range: [337.5, 360] }
    ];

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        if (degrees >= direction.range[0] && degrees < direction.range[1]) {
            return direction.label;
        }
    }

    return 'North';
}

function capitalizeEachWord(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}

function filterUniqueDates(response) {
    const currentDate = new Date();
    const nextFiveDays = [];

    for (let i = 1; i <= 5; i++) {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i);
        nextFiveDays.push(nextDate.toISOString().split('T')[0]);
    }
  
    const filteredObjects = response.filter(item => {
        const itemDateTime = item.dt_txt.split(' ');
        const itemDate = itemDateTime[0];
        const itemTime = itemDateTime[1];

        return nextFiveDays.includes(itemDate) && itemTime === "15:00:00";
    });

    const uniqueDatesMap = new Map();
    filteredObjects.forEach(item => {
        const itemDate = new Date(item.dt_txt.split(' ')[0]);
        const itemDateString = itemDate.toISOString().split('T')[0];
        uniqueDatesMap.set(itemDateString, item);
    });

    const uniqueObjects = Array.from(uniqueDatesMap.values());

    return uniqueObjects.slice(0, 5);
}

function formatDate(dateString) {
    const providedDate = new Date(dateString);
    
    const currentDate = new Date();

    if (
        providedDate.getDate() === currentDate.getDate() + 1 &&
        providedDate.getMonth() === currentDate.getMonth() &&
        providedDate.getFullYear() === currentDate.getFullYear()
    ) {
        return 'Tomorrow';
    } else {
        const formattedDate = `${providedDate.getDate()} ${getMonthName(providedDate.getMonth())}`;
        return formattedDate;
    }
}

function getMonthName(monthIndex) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[monthIndex];
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

export {
    getWeatherInformation,
    degreesToDirection,
    capitalizeEachWord,
    getForecastInformation,
    filterUniqueDates,
    formatDate,
    celsiusToFahrenheit,
}
