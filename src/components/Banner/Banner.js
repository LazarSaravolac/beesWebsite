import React from 'react'
import classes from './Banner.module.css';
import { Link } from 'react-router-dom';
export default function Banner({title,subtitle,children}) {
    return (
        <div className={classes.banner}>
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            <Link to="articles">
            <button className={classes.bannerBtn}>Nasa ponuda</button>
            </Link>
        </div>
    )
}
