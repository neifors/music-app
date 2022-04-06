import React, { useState } from "react";
import "./index.css";


export const DisplayGallery = ( ) => {
   const [ albums, setAlbums ] = useState([
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
   ])
   const renderAlbums = () => albums.map(alb => <div className="album-card" key={alb.id}><img className="album-img" src={alb.img}/><h3>{alb.title}</h3><p>{alb.year}</p></div>)
   
   
   return (
      <>
         {albums && <div id="albums-wrapper">{renderAlbums()}</div>}
      </>
   )
}

// import React from 'react';
// import Gallery from 'react-grid-gallery';

// export const DisplayGallery = () => {
//    const images =
//    [{
//          src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//          thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//          thumbnailWidth: 320,
//          thumbnailHeight: 174,
//          isSelected: true,
//          caption: "After Rain (Jeshu John - designerspics.com)"
//    },
//    {
//          src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//          thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//          thumbnailWidth: 320,
//          thumbnailHeight: 212,
//          tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//          caption: "Boats (Jeshu John - designerspics.com)"
//    },
//    {
//          src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//          thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//          thumbnailWidth: 320,
//          thumbnailHeight: 212
//    }]

//    return(
//          <Gallery images={images}/>
//    )
// }
