import React, { Component } from 'react';
import classes from './Locations.module.css';
import Location from './Location/Location';
import p1 from '../../images/p1.jpg';
export default class Locations extends Component {
  render (){
  return(
      <div>
          <h1 className="my-5 text-center" >Radovi</h1>
          <div className="py-5">
              <div className="container-fluid text-justify">
                  <div className="row">
                      <Location title="Vrdnik, Fruska gora" img={1} honey={[{honey:"Gletovanje"},{honey:"Malterisanje"}]} />  
                      <Location title="Temerin, Vojvodina" img={2} honey={[{honey:"Gletovanje"},{honey:"Malterisanje"}]}/> 
                      <Location title="Irig, Vojvodina" img={3} honey={[{honey:"Fasadiranje"},{honey:"Postavljanje lajsni"}]}/> 
                      <Location title="Sremski Karlovci, Vojvodina" img={4} honey={[{ honey: "Malterisanje" }, { honey: "Gletovanje" }]} />
                      <Location title="Vrdnik, Fruska gora" img={1} honey={[{honey:"Gletovanje"},{honey:"Malterisanje"}]} />  
                      <Location title="Temerin, Vojvodina" img={2} honey={[{honey:"Gletovanje"},{honey:"Malterisanje"}]}/>
                      <Location title="Irig, Vojvodina" img={3} honey={[{honey:"Fasadiranje"},{honey:"Postavljanje lajsni"}]}/> 
                      <Location title="Sremski Karlovci, Vojvodina" img={5} honey={[{honey:"Malterisanje"},{honey:"Gletovanje"}]}/> 
                  </div>
              </div>
          </div>
          
      </div>
       )
  };
}