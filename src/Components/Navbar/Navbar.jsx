import React from 'react'
import Image from '../../Assets'


function Navbar() {
  return (
    <div className='container flex  justify-evenly'>
        <div className="logo mt-2"><img src={Image.logo} alt="" /></div>
        <div className="item1">
            <ul className='md:flex justify-evenly items-center m-3 sm:hidden'>
                <li className='mr-5 btn'>Home</li>
                <li className='mr-6 btn'>Services</li>
                <li className='mr-6 btn'>Product</li>
                <li className='mr-6 btn'>Technology</li>
                <li className='mr-6 btn'>About</li>
                <li className='mr-6 btn'>Client</li>
                <li className='mr-6 btn'>Partner</li>
            </ul>
        </div>
        <div className="item2">
          <ul className='md:flex justify-evenly items-center m-3 sm:hidden lg:flex'>
            <li className='mr-6 btn'><img src={Image.Union} alt="" /></li>
            <li className='mr-6 btn'><img src={Image.mail} alt="" /></li>
            <li className='mr-6 btn'><img src={Image.shuffle} alt="" /></li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar