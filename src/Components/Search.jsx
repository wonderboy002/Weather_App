import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import WeatherData from "./WeatherData";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "1fdbc6ff2a8853e3d647783ff8f9c4cd";
const Search = (props) => {
  const [city, setCity] = useState("");
  // const [weather, setWeather] = useState(null);
  useEffect(() => {
    console.log(props.data)
  },[props.data]);

   const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .get(`${baseUrl}q=${city}&appid=${apiKey}`)
      .then((response) => {
        props.setData(response.data);
      })
      .catch((error) => {
        alert("Something went wrong!!!");
      });
      console.log(props.data);
  };
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          name="city"
          id="city"
          className="cityName"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="searchbtn" onClick={handleClick}>
          <FaSearch />
        </button>
      </div>
      {props.data && <WeatherData data={props.data}/>}
    </>
  );
};

export default Search;
