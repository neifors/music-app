import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom'

export const Header = () => {
   const goTo = useNavigate();

   return(
      <nav>
         <NavLink to="/">The Artist</NavLink>
         <NavLink to="albums">Albums</NavLink>
         {/* <button onClick={ () => goTo(-1)}>Back</button> */}
      </nav>
   )
}
