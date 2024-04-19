import React, { useState } from 'react';
import Search from './Search';

const Main = () => {
  const [weather,setWeather]=useState(null);
  return (
    <div className="main">
        <h3>Weather App</h3>
    <Search data={weather} setData={setWeather}/>
  </div>
  );
}

export default Main;
