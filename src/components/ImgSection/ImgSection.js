import React from 'react'
import classes from './ImgSection.module.css';
export default function ImgSection({ children}) {
    return (
        <header className={classes.beesImg}>
            {children}
        </header>
    )
}

