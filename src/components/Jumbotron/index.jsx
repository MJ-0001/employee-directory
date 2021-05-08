import React from 'react';
import './style.css';

export default function Jumbotron () {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4 ">Employee Directory</h1>
          <p className="p-header">Click headings to filter or use search box to narrow results</p>
        </div>
      </div>
    </>
  )
};