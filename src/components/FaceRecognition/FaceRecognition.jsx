import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className='flex justify-center'>
      <div className='absolute mt-2'>
        <img id='inputImage' className=' w-96 h-auto' src={imageUrl} alt="entered img" />
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  )
}

export default FaceRecognition