import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import './index.css';


export const Header = () => {

   return(
      <nav id="nav-bar">
         <div className="nav-bar-link"><NavLink to="/">The Artist</NavLink></div>
         <div className="nav-bar-link"><NavLink to="timeline">Biography</NavLink></div>
         <div className="nav-bar-link"><NavLink to="albums">Albums</NavLink></div>
      </nav>
   )
}
