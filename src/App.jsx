// App.js
import React from 'react'
import * as Pages from './pages';
import {Routes, Route} from 'react-router-dom'
import { Layout } from './layout';
import './App.css';
import { DisplayGallery, FeaturedAlbum } from './components';


// import './App.css';


const App = () => {
   return (
     <>
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Pages.Homepage/>}/>
        <Route path="albums" element={<Pages.AlbumsGallery/>}>
          <Route index element={<DisplayGallery />} />
          <Route path=":albumId" element={<FeaturedAlbum />} />
		    </Route>
        <Route path='biography' element={<Pages.Biography />} />
      </Route>
     </Routes>
     </>
   )
};

export default App;
