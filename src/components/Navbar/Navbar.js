import React from 'react'
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
export default function Navbar() {
    return (
        <nav className={classes.navbar}>
          <div className={classes.navCenter}>
              
              <ul className={[classes.navLinks,classes.showNav].join(' ')}>
                  <li><Link to="/">Pocetna</Link> </li>
                  <li><Link to="/articles">Ponuda</Link></li>
              </ul>
          </div>
          
      </nav>

    )
}
