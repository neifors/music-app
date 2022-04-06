import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import './index.css';


export const Header = () => {
   // const goTo = useNavigate();

   return(
      <nav id="nav-bar">
         <div class="nav-bar-link"><NavLink to="/">The Artist</NavLink></div>
         <div class="nav-bar-link"><NavLink to="albums">Albums</NavLink></div>
         {/* <button onClick={ () => goTo(-1)}>Back</button> */}
      </nav>
   )
}
