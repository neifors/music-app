import React, { useState } from 'react';
import {Slideshow, Content} from '../../components';
import {images} from '../../data/data'

import './index.css';


export function Biography() {


   return(
      <div id="biography">
         <h1 id="michael-jackson-title">MICHAEL JACKSON</h1>
         <Slideshow interval={10000} images={images} />
         <h2 id="biography-title">Biography</h2>
         <Content />
      </div>
   )

}
