import React, { useEffect } from 'react';

const WeatherData = ({data}) => {
    useEffect(()=>{
      console.log("this is the data to be displayed : ",data);
    },[data])
  return (
    <>
     Here is the data
    </>
  );
}

export default WeatherData;
