import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Diploma.module.css';
import {GiTrophyCup, GiDiploma } from 'react-icons/gi';
export default function Diploma({ iconType, text, place, year }) {
    
    let placeType = null;
    switch (place) {
        case 1: placeType = classes.first;
            break;
        case 2: placeType = classes.second;
            break;
        case 3: placeType = classes.third;
            break;
        default: placeType = null;
            break;
    }

    let rank = [classes.thropy, placeType].join(' ');

    let icon = null;
    switch (iconType) {
        case "cup": icon = <GiTrophyCup />;
            break;
        case "diploma": icon = <GiDiploma />;
            break;
        default: icon = <GiTrophyCup />;
            break;
    }
    return (
        <div className="col-9 col-md-6 col-lg-3 mx-auto">
            

                <div className="py-5 d-flex flex-column mx-auto">
                   
                <span className={rank}> {icon}</span>
                <h4 className="mx-auto text-center my-2 text-white">{year}</h4>
            <h5 className="mx-auto text-center text-white">{text}</h5>
                    
            </div>
        </div>
    )
}
