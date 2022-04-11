import React from 'react';
import {Slideshow} from '../../components';
import {images} from '../../data/data'

import './index.css';


export function Homepage() {


   return(
      <div id="biography">
         <div id='biography-title-wrapper'>
            <img className="title-imgs" src='https://www.mpadeco.com/resize/500x500/zc/2/f/0/src/sites/mpadeco/files/products/6270.png'/>
            <h1 role="main-title" id="michael-jackson-title">MICHAEL JACKSON</h1>
            <img className="title-imgs" src='https://pngimg.com/uploads/michael_jackson/michael_jackson_PNG40.png'/>
         </div>
         <Slideshow interval={10000} images={images} />
      </div>
   )

}
