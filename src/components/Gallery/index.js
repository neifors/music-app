import React, { useState } from "react";
import "./index.css";

// const renderAlbums = () => albums.map(alb => <li key={alb.id} onClick={() => handleArticleSelect(alb.id)}>{alb.content}</li>)

// const [ albums, setAlbums ] = useState([
//    { id: 1, title: 'Got to Be There', year: '1972'},
//    { id: 2, title: 'Ben', year: '1972'},
//    { id: 3, title: 'Music & Me', year: '1973'},
//    { id: 4, title: 'Forever, Michael', year: '1975'},
//    { id: 5, title: 'Off the Wall', year: '1979'},
//    { id: 6, title: 'Thriller', year: '1982'},
//    { id: 7, title: 'Bad', year: '1987'},
//    { id: 8, title: 'Dangerous', year: '1991'},
//    { id: 9, title: 'HIStory: Past, Present and Future, Book I', year: '1995'},
//    { id: 10, title: 'Invincible', year: '2001'}
// ])

export const Gallery = ( ) => {
   return (
      // <ul>
      //    {
      //       albums.map(alb =>  (
      //          <li key={alb.id} >
      //                {alb.title} {alb.year}
      //          </li>
      //       ))
      //    }
      // </ul>
      <h1>Gallery component</h1>
   )
}
