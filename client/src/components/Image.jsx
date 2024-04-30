import React from 'react'

const Image = ({ imageData }) => {
  return (
    <div className="img-holder absolute" style={imageData.styles} >
      <img className='w-full h-full' src={imageData.src} alt={imageData.src} /> 
    </div>
  )
}

export default Image