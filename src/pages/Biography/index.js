import React, { useState } from 'react';
import {Slideshow, Content} from '../../components';

import './index.css';


export function Biography() {

   const images = [
      'https://www.gratistodo.com/wp-content/uploads/2016/11/Michael-Jackson-Wallpapers-2.jpg',
      'https://www.gratistodo.com/wp-content/uploads/2016/11/Michael-Jackson-Wallpapers-5.jpg',
      'https://www.gratistodo.com/wp-content/uploads/2016/11/Michael-Jackson-Wallpapers-6.jpg',
      'https://static1.therichestimages.com/wordpress/wp-content/uploads/2018/05/Michael-Jackson-Covering-Face.jpg'
   ]

   return(
      <div id="biography">
         <h1 id="michael-jackson-title">MICHAEL JACKSON</h1>
         <h2 id="biography-title">Biography</h2>
         <Content />
         <Slideshow interval={10000} images={images} />
      </div>
   )

}
