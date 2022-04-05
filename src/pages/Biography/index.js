import React, { useState } from 'react';
import Slideshow from '../../components/Slideshow';

export function Biography() {

   const images = [
      'https://www.gratistodo.com/wp-content/uploads/2016/11/Michael-Jackson-Wallpapers-2.jpg',
      'https://www.gratistodo.com/wp-content/uploads/2016/11/Michael-Jackson-Wallpapers-5.jpg',
      'https://www.gratistodo.com/wp-content/uploads/2016/11/Michael-Jackson-Wallpapers-6.jpg',
      'https://static1.therichestimages.com/wordpress/wp-content/uploads/2018/05/Michael-Jackson-Covering-Face.jpg'
   ]

   return(
      <>
         <h1>Michael Jackson</h1>
         <Slideshow
         interval={3000}
         images={images}
         />
      </>
   )

}
