import React from 'react'
import slika from '../../../images/beesHome.jpg';
import p1 from '../../../images/p1.jpg';
import classes from './Location.module.css';
import 'bootstrap/dist/css/bootstrap.css';

import styled from 'styled-components';
export default function Location({ img, text, title, honey }) {
    
    
    let imgOpt = null;
    switch (img) {
        case 1: imgOpt = p1;
            break;
        case 2: imgOpt = slika;
            break;
        default: imgOpt = p1;
    }

    const honeys = honey.map(h => {
        return <span>{h.honey}</span>
    })

    console.log(honeys);
    
    return (
        

        <ProductWrapper className="col-9 col-md-6 col-lg-6 col-xl-3 my-3 mx-auto">
            <div className="card">
               
                <div className="img-container pt-5 px-5">
                <img src={imgOpt} alt="location" className="card-img-top" />
                            </div>
                {/* card footer */}
                <div className="card-footer d-flex flex-column">
                    <div className="d-flex flex-column justify-content-between my-2 ">
                        <span className="skills">
                            
                            {honeys}
                        </span>
                        
                    <span className="title ">{title}</span>
                    </div>
                    
                    <h5 className="font-italic mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odio obcaecati fugiat eius commodi eligendi dolorum reprehenderit dicta. Adipisci vero rerum quis. Natus sequi ullam alias quae magnam! Sint, tenetur.
                    </h5>
                </div>
            </div>
            
     </ProductWrapper>
    )
}

    
const ProductWrapper = styled.div`
    .card{
        border-color:transparent;
        transition:all 1s linear;
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
        
    }
    .card-footer{
        background:transparent;
        border-top:transparent;        
        transition:all 0.2s linear;
    }
   
    .img-container{
        position:relative;
        overflow:hidden;
    }

    .card-img-top{
        transition:all 1s linear;
        transform:scale(1.2);
        width:100%;
    }
    .title {
        font-size:17px;
        text-align:right;
        font-weight:bold;
        padding-top:15px; 
        width:100%;
    }
    .skills span {
        color:black;
        background:yellow;
        padding:5px;
        margin-left:12px;
        border:2px solid yellow;
        border-radius:5px;
        
    }
  
    
`