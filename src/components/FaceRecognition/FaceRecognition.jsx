import React from 'react'

const FaceRecognition = ({imageUrl}) => {
  return (
    <div className='flex justify-center'>
      <div className='absolute mt-2'>
        <img className=' w-96 h-auto' src={imageUrl} alt="entered img" />
      </div>
    </div>
  )
}

export default FaceRecognition