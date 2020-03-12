import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  ImgSection  from './ImgSection/ImgSection';
import Banner from './Banner/Banner';
import Locations from './Locations/Locations';
import Diplomas from './Diplomas/Diplomas';
export default class BeesHome extends Component {
  render (){
  return(
      <div>
           <ImgSection>
                <Banner title="Prodaja meda" subtitle="Vrhunski kvalitet" >
                </Banner>
          </ImgSection>
            <Locations />
            <Diplomas/>
      </div>
       )
  };
}