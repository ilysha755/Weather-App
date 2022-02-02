import React from "react";
import Info from './components/info';
import Form from './components/form';
import WeatherBox from './components/WeatherBox';
import styles from './app.css';
import Background from './Bg/bg.mp4';

const API_KEY = 'f10d459d04fcea9aa87124713863823c'

class App extends React.Component {
state = {
  temp: undefined,
  city: undefined,
  country: undefined,
}

getWeather = async (e) =>{
  e.preventDefault();
  let city = e.target.elements.city.value;
  let api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);
  let data = await api_url.json();


  this.setState({
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    
  });
}

  render() {
    return(
      
      <div className="bg">
        <video className="weather__bg" autoPlay muted loop>
          <source src={Background} type="video/mp4"/>
          </video>
      <main className="weather">
  
        <Info />
        <Form WeatherMethod={this.getWeather} />
        <WeatherBox 
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        />
      </main>
      </div>
    );
  }
}
export default App;