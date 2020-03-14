import React, { Component } from 'react';
import Article from './Article/Article';
export default class Articles extends Component {
  render (){
  return(
      <div className="container pt-5 mt-5">
          <div className="row">

          <Article />
          <Article/>
          <Article />
              <Article />
              <Article />
          <Article/>
          <Article />
          <Article/>
          </div>
      </div>
       )
  };
}