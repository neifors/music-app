import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import './index.css';


export const Header = () => {

   return(
      <nav id="nav-bar">
         <div class="nav-bar-link"><NavLink to="/">The Artist</NavLink></div>
         <div class="nav-bar-link"><NavLink to="albums">Albums</NavLink></div>
      </nav>
   )
}
