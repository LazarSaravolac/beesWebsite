import React, { Component } from 'react';
import  ImgSection  from './ImgSection/ImgSection';
import Banner from './Banner/Banner';
import Locations from './Locations/Locations';
import Info from './Info/Info';
export default class BeesHome extends Component {
  render (){
  return(
      <div>
           <ImgSection>
                <Banner title="Molersko gipsarski radovi" subtitle="Vrhunski kvalitet" >
                </Banner>
          </ImgSection>
      <Info/>
      <Locations />
      </div>
       )
  };
}