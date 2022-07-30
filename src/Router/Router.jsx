import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Services from '../Pages/Services'



function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/service' element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router