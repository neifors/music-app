import React, { useState } from "react";
import "./index.css";


export const DisplayGallery = ( ) => {
   const [ albums, setAlbums ] = useState([
      { id: 1, title: 'Got to Be There', year: '1972'},
      { id: 2, title: 'Ben', year: '1972'},
      { id: 3, title: 'Music & Me', year: '1973'},
      { id: 4, title: 'Forever, Michael', year: '1975'},
      { id: 5, title: 'Off the Wall', year: '1979'},
      { id: 6, title: 'Thriller', year: '1982'},
      { id: 7, title: 'Bad', year: '1987'},
      { id: 8, title: 'Dangerous', year: '1991'},
      { id: 9, title: 'HIStory: Past, Present and Future, Book I', year: '1995'},
      { id: 10, title: 'Invincible', year: '2001'}
   ])
   const renderAlbums = () => albums.map(alb => <li key={alb.id}>{alb.title}-{alb.year}</li>)
   
   
   return (
      <>
         <h1>Gallery component</h1>
         <ul>{renderAlbums()}</ul>
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
