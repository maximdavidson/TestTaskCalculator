import React, { Component } from 'react'
import c from './Header.module.css'

class Header extends Component {
   render() {
      return (
         <div className={c.header}>
            <h3 className={c.title}>Calculator App</h3>
            <nav className={c.nav}>
               <a href=''>Home</a>
               <a href=''>Settings</a>
            </nav>
         </div>
      )
   }
}

export default Header