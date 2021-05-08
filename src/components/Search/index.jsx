import React from 'react';
import './style.css';
import getData from '../../utils/API'

export default function Search () {
  return (
    <div>
      <form>
        <input className="search-bar form-control"/>
      </form>
      <button onClick={getData}>Test</button>
    </div>
    
  )
};