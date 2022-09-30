 import React from 'react';
 import s from '../styles/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return (<div className={s.div}>
            <input type="text" placeholder="Ciudad..."/>
            <button className={s.button} onClick={()=>props.onSearch('Buscando ciudad...')}>Agregar</button>
         </div>)
};