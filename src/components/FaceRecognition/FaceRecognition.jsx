import React from 'react'

const FaceRecognition = ({imageUrl}) => {
  return (
    <div className='flex justify-center'>
      <img src={imageUrl} alt="entered img" />
      <p>FaceRecognition</p>
    </div>
  )
}

export default FaceRecognition