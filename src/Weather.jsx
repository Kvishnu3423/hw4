import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {

        fetchWeather();
    }, []);

    const fetchWeather = async () => {
        try {
            const position = await getCurrentPosition();
            const apiKey = '82e32a765a85c6bc54da6d17cb4e2b01';
            const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
                params: {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    appid: apiKey,
                    units: 'metric'
                }
            });
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const getCurrentPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Weather Information</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            { }
        </div>
    );
};

export default Weather;
