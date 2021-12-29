import React, { useState ,useEffect } from "react"
import Weather from "../weather/weather";
import './SearchBar.css'
import Header from "../header/header";


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState({});
    



    const getWeatherInfo = () =>{
        
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3e1242aa56786be66b8925d631359dde`)
        .then (res => res.json())
        .then(res=> {
        
             
      const { temp, humidity, pressure } = res.main;
      const {main: weathermood } = res.weather[0];
      const { name } = res;
      const { speed } = res.wind;
      const { country, sunset } = res.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      console.log(myNewWeatherInfo);

            setData(myNewWeatherInfo);
        })  
    }
 
    useEffect(() => {
        getWeatherInfo();
    })

   
   
    return (
        <div>
             <Header  {...data}/>
            <span>
            
            <input type="text" placeholder='LOCATION' value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
            <button type="button" onClick={getWeatherInfo}>SET</button>
            </span>

            <Weather {...data} />
        </div>
    )
}

export default SearchBar
