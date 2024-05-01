import React from 'react'

const Text = ({ textData }) => {
  let classes = "text-holder absolute"
  const openLink = () => {
    if (!textData.link) return 
    
    window.open(textData.link, '_blank');
  }

  if (textData.link) {
    classes = `${classes} cursor-pointer`
  }
  
  return (
    <div className={classes} style={textData.styles} onClick={openLink}>
      <div className="text-content w-max h-full outline-none">{textData.content}</div>
    </div>
  )
}

export default Text