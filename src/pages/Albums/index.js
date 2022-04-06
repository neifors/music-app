import React, { useState } from 'react';
import {DisplayGallery} from '../../components';

import './index.css';


export function Albums() {

   return(
      <div id="albums">
         <h1 id="albums">ALBUMS!</h1>
         <DisplayGallery />
      </div>
   )

}

