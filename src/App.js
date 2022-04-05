// App.js
import React from 'react'
import { Biography, Albums } from './pages';
import {Routes, Route} from 'react-router-dom'
import { Layout } from './layout';
import './App.css';


// import './App.css';


const App = () => {
   return (
     <>
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Biography/>}/>
        <Route path="albums" element={<Albums/>}/>
      </Route>
     </Routes>
     </>
   )
 };

export default App;
