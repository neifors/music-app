import React, { useState } from 'react';
import {DisplayGallery} from '../../components';

import './index.css';


export function AlbumsGallery() {

   return(
      <div id="albums-wrapper">
         <div id="albums-title-wrapper">
            <h1 id="albums-title">
               <img className="title-imgs" src='https://www.mpadeco.com/resize/500x500/zc/2/f/0/src/sites/mpadeco/files/products/6270.png'/>
                  ALBUMS DISCOGRAPHY
               <img className="title-imgs" src='https://pngimg.com/uploads/michael_jackson/michael_jackson_PNG40.png'/>
            </h1>
         </div>
         <DisplayGallery />
      </div>
   )

}

