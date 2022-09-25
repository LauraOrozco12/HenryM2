import React from 'react';

export default function Card(props) {
  return (<div> 
          <button onClick={props.onClose}>✖</button>
          <h4>{props.name}</h4>
          <div>
          <p>Max</p>
          <p>{props.max}</p>
          <p>Min</p>
          <p>{props.min}</p>
          </div>
          <img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"img"}/>
        </div>) 
};