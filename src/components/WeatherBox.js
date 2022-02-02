import React from "react";
import styles from "../app.css";
const WeatherBox =(props) =>{
  return(
    <div>
    { props.city &&
        <div className="weather-box">
        <p className="weather__text">City: {props.city},{props.country}</p>
        <p className="weather__text">Temperature:{Math.floor(props.temp)} &deg;C</p>
        </div>
        }
    </div>
  );
}
export default WeatherBox;