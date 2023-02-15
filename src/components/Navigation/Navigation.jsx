import React from 'react'

const Navigation = ({onRouteChange, isSignedIn}) => {
  
    if(isSignedIn) {
      return (
        <div className='flex justify-end'>
          <p className='underline text-lg cursor-pointer px-2' onClick={() => onRouteChange('signout')}>Sign Out</p>
        </div>
      );
    } else {
      return (
        <div className='flex justify-end'>
          <p className='underline text-lg cursor-pointer px-2' onClick={() => onRouteChange('signin')}>Sign in</p>
          <p className='underline text-lg cursor-pointer px-2' onClick={() => onRouteChange('register')}>Register</p>
        </div>
      );
    }
    

}

export default Navigation