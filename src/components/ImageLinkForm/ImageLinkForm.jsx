import React from 'react'

const ImageLinkForm = () => {
  return (
    <div className='text-white'>
      <p>Give me an image.</p>
      <div className='p-4 rounded-md shadow-lg'>
        <input className='m-2 w-3/4 p-2' type="text" placeholder='URL' />
        <button className='w-1/4 px-3 py-2 m-2 bg-teal-400'>Detect</button>
      </div>
    </div>
  )
}

export default ImageLinkForm