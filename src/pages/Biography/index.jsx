import React, { useState } from 'react';
import {Slideshow, Content} from '../../components';
import {images} from '../../data/data'

import './index.css';


export function Biography() {


   return(
      <div id="biography">
         <div id='biography-title-wrapper'>
            <img className="title-imgs" src='https://www.mpadeco.com/resize/500x500/zc/2/f/0/src/sites/mpadeco/files/products/6270.png'/>
            <h1 role="main-title" id="michael-jackson-title">MICHAEL JACKSON</h1>
            <img className="title-imgs" src='https://pngimg.com/uploads/michael_jackson/michael_jackson_PNG40.png'/>
         </div>
         <Slideshow interval={10000} images={images} />
         <h2 role="biography-title" id="biography-title">Biography</h2>
         <Content />
      </div>
   )

}
