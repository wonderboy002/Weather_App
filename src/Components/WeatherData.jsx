import React, { useEffect, useState } from 'react';
import { FaTemperatureHigh } from "react-icons/fa";
const currentDate=new Date().toLocaleString();
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { MdOutlineVisibility } from "react-icons/md";
import { FaTemperatureArrowUp } from "react-icons/fa6";
// const iconCode = "01d"; // Icon code from API response
// const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

const WeatherData = ({data}) => {
  const [iconCode,setIcon]=useState("");
    useEffect(()=>{
      console.log("this is the data to be displayed : ",data);
      setIcon(data.weather[0].icon);
      console.log("icon code ,",iconCode);
    },[data,iconCode])
  return (
    <>
     <div className="weatherData">
      {currentDate}
      <h5>Weather Details</h5>
      <div className="details">
          <div className="temp">
            <p>Temperature</p>
            <FaTemperatureHigh style={{fontSize : '35px'}} className='icon'/>
            <span>{data.main.temp}</span>
          </div>
          <div className="mainT">
            <p>Weather Type</p>
            <img width={'35px'} height={'35px'} src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt="" />
            <span>{data.weather[0].main }</span>
          </div>
          <div className="wind">
            <p>Wind Speed</p>
            <FaWind style={{fontSize : '35px'}} />
            <span>{data.wind.speed} m/s</span>
          </div>
         
          <div className="feelslike">
            <p>Feels Like</p>
            <TbTemperatureFahrenheit style={{fontSize : '35px'}} />
            <span>{data.main.feels_like}</span>
          </div>
          <div className="feelslike">
            <p>Visibility</p>
            <MdOutlineVisibility style={{fontSize : '35px'}} />
            <span>{data.visibility}</span>
          </div>
          <div className="feelslike">
            <p>Max Temp</p>
            <FaTemperatureArrowUp style={{fontSize : '35px'}} />
            <span>{data.main.temp_max}</span>
          </div>
      </div>
     </div>
    </>
  );
}

export default WeatherData;
