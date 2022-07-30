import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <div>
        <nav className='drop-shadow-2xl border'><Navbar/></nav>
        <main>main</main>
        <footer><Footer/></footer>
    </div>
  )
}

export default Layout