import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import styled from 'styled-components';
export default function Location({ img, text, title, honey }) {
    


    const honeys = honey.map(h => {
        return <span>{h.honey}</span>
    })

    console.log(honeys);
    
    return (
        

        <ProductWrapper className="col-11 col-md-6 col-lg-6 col-xl-3 my-3 mx-auto">
            <div className="card">
               
                <div className="img-container pt-5 px-5">
                <img src={require(`../../../images/${img}.jpg`)} alt="location" className="card-img-top" />
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
                     Klijentu je vršena adaptacija spoljne fasade, uređenje dnevne sobe. Korišćen je stiropor 12.5mm.   
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
        color:white;
        background:blue;
        padding:5px;
        margin-left:12px;
        border:2px solid blue;
        border-radius:5px;
        
    }
  
    
`