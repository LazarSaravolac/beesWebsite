import React, { Component } from 'react';
import Diploma from './Diploma/Diploma';
import classes from './Diplomas.module.css';
export default class Diplomas extends Component {
  render (){
  return(
      <div className={classes.diplomas}>
             <h1 className="pt-3 text-center text-white" >Priznanja</h1>
          <div className="py-5">
              <div className="container-fluid  ">
                  <div className="row">
                      <Diploma text="Republicko takmicenje" year="2019." place={1} />  
                      <Diploma place={2} text="Okruzno takmicenje" year="2018."/>  
                      <Diploma place={3} text="Takmicenje u Somboru" year="2017."/>  
                      <Diploma  iconType="diploma" text="Pcelar Kikinde" year="2020." />  
                  </div>
              </div>
          </div>  
      </div>
       )
  };
}