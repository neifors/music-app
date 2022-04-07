import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import './index.css';
 
export const FeaturedAlbum = props => {

   const albums = [
      { id: 1, img: "https://th.bing.com/th/id/OIP.wNqzAst6QqTy-akb7_9cPgHaG-?pid=ImgDet&rs=1", title: 'Got to Be There', year: '1972', songs: [ "1. Ain’t No Sunshine", "2. I Wanna Be Where You Are", "3. Girl Don’t Take Your Love from Me", "4. In Our Small Way", "5. Got to Be There", "6. Rockin’ Robin", "7. Wings of My Love", "8. Maria (You Were the Only One)", "9. Love Is Here and Now You’re Gone", "10. You’ve Got a Friend"]},
      { id: 2, img: "https://4.bp.blogspot.com/-lvvln77gmqI/UKS_3rOG9xI/AAAAAAAACyM/aUmyqJWVNpk/s1600/Michael_Jackson-Ben-Frontal.jpg", title: 'Ben', year: '1972', songs: []},
      { id: 3, img: "https://i.ebayimg.com/images/g/IPgAAOSwQcBg-gR1/s-l300.jpg", title: 'Music & Me', year: '1973', songs: []},
      { id: 4, img: "https://3.bp.blogspot.com/-95do5JfeMeU/T6bKAmmv63I/AAAAAAAAHlY/u9T6JXQDofA/s1600/michael-jackson-forever-michael.jpg", title: 'Forever, Michael', year: '1975', songs: []},
      { id: 5, img: "https://th.bing.com/th/id/OIP.4DvhzSvE7o2ApneWiMy7LQHaHa?pid=ImgDet&rs=1", title: 'Off the Wall', year: '1979', songs: []},
      { id: 6, img: "https://i.redd.it/80rt2zjgjfx41.jpg", title: 'Thriller', year: '1982', songs: []},
      { id: 7, img: "https://assets.onbuy.com/i15/product/bcfa903ec3d64f1987e3c702651cc13e-m1973240/bad-special-edition-michael-jackson-album-audio-cd-new-sealed.jpg", title: 'Bad', year: '1987', songs: []},
      { id: 8, img: "https://i.redd.it/sz6kg05ah5y41.jpg", title: 'Dangerous', year: '1991', songs: []},
      { id: 9, img: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/6c/02/71/6c0271f7-5e45-37ea-1de2-2068050f4cf8/884977149166.jpg/1200x630bb.jpg", title: 'HIStory: Past, Present and Future, Book I', year: '1995', songs: []},
      { id: 10, img: "https://www.theedgesusu.co.uk/wp-content/uploads/2016/10/00.-Michael-Jackson-Invincible-Front.jpg", title: 'Invincible', year: '2001', songs: []}
   ];

   const goTo = useNavigate();
   const [ selectedAlbum, setSelectedAlbum ] = useState([]);
   const { albumId } = useParams();

   const close = () => {
      props.handleClose();
      goTo(-1);
   };

   const renderSongs = (album) => album['songs'].map( song => <li>{song}</li>)
   

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
            <ul>
               {renderSongs(selectedAlbum)}
            </ul>
         </div>
      </div>
   );
};
 
