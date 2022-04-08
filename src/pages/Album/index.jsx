import React from 'react'
import { FeaturedAlbum } from '../../components'
import './index.css'


export function Album() {

   const [isOpen, setIsOpen] = useState(false);
 
   const togglePopup = () => {
     setIsOpen(!isOpen);
   }


   return(
      <div id="albums-wrapper">
         <FeaturedAlbum />
      </div>
   )

}
