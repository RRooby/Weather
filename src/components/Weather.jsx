import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';



const Weather = () => {

    const [ weather, setWeather ] = useState({});
    const [ celcius, setCelcius ] = useState(true);
    
    
    useEffect(() => {
        

        function success(pos) {

            const crd = pos.coords;
            
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            
            
            axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f7729c57ae5b64b21c2c143f054564bc&units=metric&lang=es`)
                .then(res => setWeather(res.data))     
                const centigrades = "C"       
        }
        
        navigator.geolocation.getCurrentPosition(success);
    }, [celcius])
    console.log(weather);

    const change = ()=> {
        setCelcius(!celcius)
    }
    
    

    useEffect(()=> {

        axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${weather.coord?.lat}&lon=${weather.coord?.lon}&appid=f7729c57ae5b64b21c2c143f054564bc&units=${celcius ? "metric" : "imperial"}&lang=es`)
        .then(res => setWeather(res.data)) 
              
    }, [celcius]);

    // console.log(weather);
 
          
    return (
        <div>
            <div className='weather'>
                {weather 
                ?
                    <div className='card'>
                        <h2>El Clima hoy</h2>
                        <div className='container'>
                            <div> 
                                
                                <p><i class="fa-solid fa-city"></i><b className='black'>  {weather.sys?.country} </b> - <b> {weather?.name} </b>   </p>
                                <img src={weather ? `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@4x.png ` : ''} alt=""  />   
        
                            </div>                                      
                            <div className='align-p'>
                                <br />
                                <br />
                                <p>Clima: <b> {weather.weather?.[0].description} </b></p>
                                <p><i class="fa-solid fa-cloud-sun"></i> Nubes: <b>{weather.clouds?.all} % </b> </p>
                                <p><i class="fa-solid fa-up-down-left-right"></i> Mayormente: <b> {weather.weather?.[0].main} </b> </p> 
                                {/* <p><i class="fa-solid fa-wind"></i> Velocidad del Viento <b> {weather.wind?.speed} m/s </b> </p> */}
                                <p>Presion Atmosferica: <b>{weather.main?.pressure} mb.</b></p>
                                <p>Humedad: <b>{weather.main?.humidity} %</b></p>
                            </div>
                        
                        </div>
                        <div>
                            <p><i className="fa-solid fa-temperature-empty"></i> Temperatura: <b>{ weather && celcius ? `${ weather.main?.temp} °C` : `${ weather.main?.temp} °F` } </b>  </p>
                            <button onClick={change}>Cambia a: °C / °F</button>
                            
                                
                                
                        </div>
                        
                    </div>
                :
                <Loading />
                }


            </div>

        </div>
    );
};

export default Weather;