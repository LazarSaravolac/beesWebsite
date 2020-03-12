import React, { Component } from 'react';
import classes from './Locations.module.css';
import Location from './Location/Location';
import p1 from '../../images/p1.jpg';
export default class Locations extends Component {
  render (){
  return(
      <div>
          <h1 className="my-5 text-center" >Lokaliteti</h1>
          <div className="py-5">
              <div className="container-fluid text-justify">
                  <div className="row">
                      <Location title="Vrdnik, Fruska gora" img={1} honey={[{honey:"Bagrem"},{honey:"Lipa"},{honey:"Suncokret"}]} />  
                      <Location title="Mala Remeta, Fruska gora" img={1} honey={[{honey:"Bagrem"},{honey:"Lipa"}]}/> 
                      <Location title="Vrdnik, Fruska gora" img={1} honey={[{honey:"Bagrem"},{honey:"Lipa"}]}/> 
                      <Location title="Vrdnik, Fruska gora" img={1} honey={[{honey:"Bagrem"},{honey:"Lipa"},{honey:"Suncokret"}]}/> 
                  </div>
              </div>
          </div>
          
      </div>
       )
  };
}