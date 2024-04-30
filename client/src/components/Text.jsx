import React from 'react'

const Text = ({ textData }) => {
  let classes = "img-holder absolute"
  const openLink = () => {
    if (!textData.url) return 

    window.open(textData.url, '_blank');
  }

  if (textData.url) {
    classes = `${classes} cursor-pointer`
  }
  
  return (
    <div className={classes} style={textData.styles} onClick={openLink}>
      <div className="text-content w-full h-full outline-none">{textData.content}</div>
    </div>
  )
}

export default Text