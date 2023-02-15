import React from 'react'

const Navigation = ({onRouteChange}) => {
  return (
    <div className='flex justify-end'>
        <p className='underline text-lg cursor-pointer' onClick={() => onRouteChange('Signin')}>Sign Out</p>
    </div>
  )
}

export default Navigation