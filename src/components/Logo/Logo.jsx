import React from 'react'
import Tilt from 'react-parallax-tilt';

import brain from './brain.png'
import './Logo.css';

const Logo = () => {
  return (
    <div className='m-4 mt-0'>
        <Tilt className='tilt border-2 w-36 h-36 flex justify-center'>
            <div className='p-3'>
                <img className='pt-5' src={brain} alt="outline of brain" />
            </div>
        </Tilt>
    </div>
  )
}

export default Logo