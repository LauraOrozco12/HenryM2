import React from 'react';
import s from '../styles/Card.module.css';

export default function Card(props) {
  return (<div className={s.div}>
    <button className={s.button} onClick={props.onClose}>✖</button>
    <h4>{props.name}</h4>
    <div className={s.valores}>
      <div className={s.divTemp}>
        <p>Max</p>
        <p>{props.max}</p>
      </div>
      <div className={s.divTemp}>
        <p>Min</p>
        <p>{props.min}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"img"} />
    </div>
  </div>)
};