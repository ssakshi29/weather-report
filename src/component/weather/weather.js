// http://api.openweathermap.org/data/2.5/weather?q=pune&appid=3e1242aa56786be66b8925d631359dde
import React, { useState, useEffect }from 'react'
import './weather.css'

const Weather =({ temp,
    weathermood,
    name,
   }) => {

        const [weatherState, setWeather]=useState("wi-day-cloudy");
        const [color,setColor] = useState("sunny");
        

        useEffect(() => {
            if (weathermood) {
              switch (weathermood) {
                case "Clouds":
                    {
                  setWeather("wi-day-cloudy");
                  setColor("cloudy");
                  break;
                    }
                case "Haze":
                    {
                  setWeather("wi-fog");
                  setColor("fog");
                  break;
                    }
                case "Clear":
                    {
                  setWeather("wi-cloud");
                  setColor("cloud");
                  break;
                    }
                case "Mist":
                    {
                  setWeather("wi-dust");
                  setColor("dust");
                  break;
                    }
                case "Smoke":
                {
                setWeather("wi-dust");
                setColor("dust");
                break;
                        }
                default:
                    {
                  setColor("cloud");
                  setWeather("wi-cloud");
                  break;
                    }
              }
            }
          }, [weathermood]);
        
    return (
        <div>
            <div className='card'>
               
                        <div className={`content-left ${color}`}>
                            <i className={`wi ${weatherState}`}></i>
                        </div>
                        <div className='content-right'>
                             <div className='right-name'>{name}</div>
                             <div className='right-temp'>{temp}<i className='wi wi-celsius'></i></div>
                             <div className="right-weather">{weathermood}</div>
                             <div className="right-time">{new Date().toLocaleString()}</div>
                        </div>
                
            </div>
        </div>
    )
}

export default Weather

