import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FeaturedAlbum } from "..";
import axios from 'axios'
import "./index.css";


export const DisplayGallery = ( ) => {

   const goTo = useNavigate()
   const [isOpen, setIsOpen] = useState(false);
   const [albums, setAlbums] = useState([])
   const togglePopup = () => setIsOpen(!isOpen);

   const fetchAlbums = async () => {
      try{
         let {data,error} = await axios.get('https://michael-jackson-api.herokuapp.com/albums');
         console.log(data)
         setAlbums(data)
      }catch(e){
         console.warn(`Oooops! ${e.message}`)
      }
   }

   useEffect(() => {
      fetchAlbums()
   },[])

   const renderAlbums = () => albums.map(alb => 
      <div className="album-card" key={alb.id} onClick={() => {
                                                         goTo(alb.id.toString());
                                                         togglePopup();
                                                      }}>
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
