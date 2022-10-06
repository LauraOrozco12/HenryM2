import React, {useState} from 'react';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards';
import './App.css';
import {Route} from 'react-router-dom';
import About from './components/About/About';
import Ciudad from './components/Ciudad/Ciudad';
import background from "./background.jpg";

export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey='4ae2636d8dfbdc3044bede63951a019b';
  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
      .then((response) => {
        if(response.main !== undefined){
          const city = {
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
            img: response.weather[0].icon,
            id: response.id,
            wind: response.wind.speed,
            temp: response.main.temp,
            name: response.name,
            weather: response.weather[0].main,
            clouds: response.clouds.all,
            latitud: response.coord.lat,
            longitud: response.coord.lon
          };
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
    });
  }
  function onClose(id){
    setCities(oldCities => oldCities.filter(c=>c.id !== id))
  }

  function onFilter(ciudadId){
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudadId.length>0){
      return ciudad[0];
    } else return null;
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Route path='/' render={() => <Nav onSearch={onSearch} />} />
      <Route exact path='/about' render={()=> <About/>}/>
      <Route exact path='/' render={()=><Cards cities={cities} onClose={onClose}/>}/>
      <Route path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}/>
    </div>
  );
}
