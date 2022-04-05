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
         {/* <p id="short-biography"><strong>Michael Joseph Jackson</strong> (August 29, 1958 – June 25, 2009) was an American singer, songwriter, and dancer. Dubbed the "King of Pop", he is regarded as one of the most significant cultural figures of the 20th century. Over a four-decade career, his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture. Jackson influenced artists across many music genres; through stage and video performances, he popularized complicated dance moves such as the moonwalk, to which he gave the name, as well as the robot. He is the most awarded individual music artist in history.</p> */}
         <Content />
         <Slideshow interval={10000} images={images} />
      </div>
   )

}
