import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter,Route,Routes }from 'react-router-dom'
import './index.css'
import Place from './component/Place.jsx'
import Keyla from './component/Keyla.jsx'
import Layout from './component/Layout.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<App/>}/>
      <Route path='/place' element={<Place/>}/>
      <Route path='/keyla' element={<Keyla/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
)
