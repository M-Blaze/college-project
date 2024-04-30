import React from 'react'

const Image = ({ imageData }) => {
  let classes = "img-holder absolute"
  const openLink = () => {
    if (!imageData.url) return 

    window.open(imageData.url, '_blank');
  }

  if (imageData.url) {
    classes = `${classes} cursor-pointer`
  }

  return (
    <div className={classes} style={imageData.styles} onClick={openLink}>
      <img className='w-full h-full' src={imageData.src} alt={imageData.src} /> 
    </div>
  )
}

export default Image