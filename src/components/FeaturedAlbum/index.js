import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import albums from "../../data/data"
import './index.css';
 
export const FeaturedAlbum = props => {

   const goTo = useNavigate();
   const [ selectedAlbum, setSelectedAlbum ] = useState([]);
   const { albumId } = useParams();

   const close = () => {
      props.handleClose();
      goTo(-1);
   };

   const renderSongs = (album) => {
      try{
         let count = 0
         return album['songs'].map( (song) => {
                                       count++;
                                       return <li key={count}>{song}</li>;
                                  })
      }catch(e){
         console.warn(e.message)
      }
   }
   

   useEffect( () => {
      try {
         if(albumId > albums.length){ throw new Error("No album with that id")};
         const result = albums.find( alb => alb['id'] == albumId);
         setSelectedAlbum(result);
      }catch(e){
         console.warm(`Oooops! ${e.message}`)
      }

   },[albumId])

   return (
      <div className="popup-box">
         <div className="box">
            <span className="close-icon" onClick={close}>x</span>
            <h1>{`${selectedAlbum['title']}`}</h1>
            <div className="songs-and-img-wrapper">
               <img  className="album-img" src={selectedAlbum['img']}  />
               <ol>
                  {renderSongs(selectedAlbum)}
               </ol>
            </div>
         </div>
      </div>
   );
};
 
