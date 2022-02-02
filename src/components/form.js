import React from "react";
import styles from "../app.css";
const Form = (props) =>(
  <form className="form" onSubmit = {props.WeatherMethod}>
          <input type="text" name="city" placeholder="Enter the city"/>
          <button>Search</button>
        </form>
)  

export default Form;