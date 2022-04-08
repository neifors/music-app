import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FeaturedAlbum } from "..";
import albums from "../../data/data"
import "./index.css";


export const DisplayGallery = ( ) => {

   const goTo = useNavigate()

   const [isOpen, setIsOpen] = useState(false);
 
   const togglePopup = () => {
      setIsOpen(!isOpen);
   }

   const renderAlbums = () => albums.map(alb => 
      <div 
         className="album-card" 
         key={alb.id} 
         onClick={() => {
            goTo(alb.id.toString());
            togglePopup();
         }
      }>
         <img 
            className="album-img" 
            src={alb.img}/>
         <h3>{alb.title}</h3>
         <p>{alb.year}</p>
      </div>)
   

   return (
      <>
         {albums && <div id="albums-wrapper">{renderAlbums()}</div>}
         {isOpen && <FeaturedAlbum handleClose={togglePopup}/>}
      </>
   )
}
