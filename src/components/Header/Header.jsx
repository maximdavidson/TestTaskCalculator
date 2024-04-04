import React, { Component } from 'react'
import c from './Header.module.css'
import { Link } from 'react-router-dom';

class Header extends Component {
   render() {
      return (
         <div className={c.header}>
            <h3 className={c.title}>Calculator App</h3>
            <nav className={c.nav}>
               <Link to='/home'>Home</Link>
               <Link to='/settings'>Settings</Link>
            </nav>
         </div>
      )
   }
}

export default Header