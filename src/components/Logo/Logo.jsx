import React from 'react'
import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <div className='m-4 mt-0'>
        <Tilt className='border-2 w-36 h-36 flex justify-center bg-green-200'>
            <div>
                <h1>👀</h1>
            </div>
        </Tilt>
    </div>
  )
}

export default Logo