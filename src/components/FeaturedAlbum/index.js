import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import './index.css'


export const FeaturedAlbum = () => {
   const { albumId } = useParams();
   const [ album, setAlbum ] = useState();

   const albums = [
      { id: 1, img: "https://th.bing.com/th/id/OIP.wNqzAst6QqTy-akb7_9cPgHaG-?pid=ImgDet&rs=1", title: 'Got to Be There', year: '1972'},
      { id: 2, img: "https://4.bp.blogspot.com/-lvvln77gmqI/UKS_3rOG9xI/AAAAAAAACyM/aUmyqJWVNpk/s1600/Michael_Jackson-Ben-Frontal.jpg", title: 'Ben', year: '1972'},
      { id: 3, img: "https://i.ebayimg.com/images/g/IPgAAOSwQcBg-gR1/s-l300.jpg", title: 'Music & Me', year: '1973'},
      { id: 4, img: "https://3.bp.blogspot.com/-95do5JfeMeU/T6bKAmmv63I/AAAAAAAAHlY/u9T6JXQDofA/s1600/michael-jackson-forever-michael.jpg", title: 'Forever, Michael', year: '1975'},
      { id: 5, img: "https://th.bing.com/th/id/OIP.4DvhzSvE7o2ApneWiMy7LQHaHa?pid=ImgDet&rs=1", title: 'Off the Wall', year: '1979'},
      { id: 6, img: "https://i.redd.it/80rt2zjgjfx41.jpg", title: 'Thriller', year: '1982'},
      { id: 7, img: "https://assets.onbuy.com/i15/product/bcfa903ec3d64f1987e3c702651cc13e-m1973240/bad-special-edition-michael-jackson-album-audio-cd-new-sealed.jpg", title: 'Bad', year: '1987'},
      { id: 8, img: "https://i.redd.it/sz6kg05ah5y41.jpg", title: 'Dangerous', year: '1991'},
      { id: 9, img: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/6c/02/71/6c0271f7-5e45-37ea-1de2-2068050f4cf8/884977149166.jpg/1200x630bb.jpg", title: 'HIStory: Past, Present and Future, Book I', year: '1995'},
      { id: 10, img: "https://www.theedgesusu.co.uk/wp-content/uploads/2016/10/00.-Michael-Jackson-Invincible-Front.jpg", title: 'Invincible', year: '2001'}
   ]

   useEffect(() => {
      const showAlbum = () => {
         try {   
            if(albumId > albums.length){ throw new Error("No album with that id")}
            let result = albums.find( alb => alb['id'] == albumId)
            setAlbum(result);
         } catch (err) {
            console.warn(err);
         }
      }
      showAlbum()
   }, [albumId])

   return ( 
      <div aria-label="featured album" id="feature">
          <>
          <h1>
              {album.title}
          </h1>
          </>
      </div>
   )
}
