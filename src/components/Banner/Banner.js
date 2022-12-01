import React from 'react'
import classes from './Banner.module.css';
export default function Banner({title,subtitle,children}) {
    return (
        <div className={classes.banner}>
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
        </div>
    )
}
