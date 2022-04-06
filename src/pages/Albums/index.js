import React, { useState } from 'react';
import {DisplayGallery} from '../../components';

import './index.css';


export function Albums() {

   return(
      <div id="albums-wrapper">
         <div id="albums-title-wrapper">
            <h1 id="albums-title">ALBUMS DISCOGRAPHY</h1>
         </div>
         <DisplayGallery />
      </div>
   )

}

