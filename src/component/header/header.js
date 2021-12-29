import React , { useState , useEffect } from 'react'
import './header.css'


const Header = ({weathermood}) => 
{
    const [color,setColor] = useState("sunny");
        
    useEffect(() => {
        if (weathermood) {
          switch (weathermood) {
            case "Clouds":
              setColor("cloudy");
              break;
            case "Haze":
              setColor("fog");
              break;
            case "Clear":
              setColor("cloudy");
              break;
            case "Mist":
            
              setColor("dust");
              break;
              case "Smoke":        
                setColor("dust");
                break;
            default:
              setColor("cloudy");
          }
        }
      }, [weathermood]);

    return (
        
     <div>
       


        
        <div className={`Header ${color}`}>
          MY WEATHER
           </div>

    </div>
    )

}


export default Header
