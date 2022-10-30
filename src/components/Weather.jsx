import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';



const Weather = () => {

    const [ weather, setWeather ] = useState({});
    const [ celcius, setCelcius ] = useState(true);
    
    
    useEffect(() => {
        

        function success(pos) {

            const crd = pos.coords;
    
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f7729c57ae5b64b21c2c143f054564bc&units=metric&lang=es`)
                .then(res => setWeather(res.data))            
        }
        
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    const change = ()=> {
        setCelcius(!celcius)
    }

    

    useEffect(()=> {

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${weather.coord?.lat}&lon=${weather.coord?.lon}&appid=f7729c57ae5b64b21c2c143f054564bc&units=${celcius ? "metric" : "imperial"}&lang=es`)
        .then(res => setWeather(res.data)) 
              
    }, [celcius]);

    console.log(weather);
 
          
    return (
        <div>
            <div className='weather'>
                <div className='card'>
                    <h2>El Clima hoy</h2>
                    <div className='container'>
                        <div> 
                            <p><i class="fa-solid fa-up-down-left-right"></i> Mayormente: <b> {weather.weather?.[0].main} </b> </p> 
                            <p><i class="fa-solid fa-city"></i> Pais: <b className='black'>  {weather.sys?.country} </b> - Ciudad: <b> {weather?.name} </b>   </p>
                            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png `} alt="" width={200} heigth={200} />   
                            <p><i className="fa-solid fa-temperature-empty"></i> Temperatura: <b> { weather.main?.temp }  </b> </p>
                        </div>                                      
                        <div className='align-p'>
                            <br />
                            <br />
                            <br />
                            
                            <p><i class="fa-solid fa-cloud-sun"></i> Nubes: <b>{weather.clouds?.all} % </b> </p>
                            <p>Clima: <b> {weather.weather?.[0].description} </b></p>
                            <p><i class="fa-solid fa-wind"></i> Velocidad del Viento <b> {weather.wind?.speed} m/s </b> </p>
                            <p>Presion Atmosferica: <b>{weather.main?.pressure} mb.</b></p>
                        </div>
                       
                    </div>
                    <div>
                            <button onClick={change}>Grados F / C</button>
                            
                    </div>
                    
                </div>


            </div>

        </div>
    );
};

export default Weather;