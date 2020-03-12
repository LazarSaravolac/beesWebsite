import React, { Component } from 'react';
import classes from './Locations.module.css';
import Location from './Location/Location';
export default class Locations extends Component {
  render (){
  return(
      <div>
          <h1 className="my-5 text-center" >Lokaliteti</h1>
          <div className="py-5">
              <div className="container-fluid text-justify">
                  <div className="row">
                      <Location title="Vrdnik, Fruska gora" />  
                      <Location title="Vrdnik, Fruska gora"/> 
                      <Location title="Vrdnik, Fruska gora" /> 
                      <Location title="Vrdnik, Fruska gora"/> 
                  </div>
              </div>
          </div>
          
      </div>
       )
  };
}