import React from 'react'

const Text = ({ textData }) => {
  return (
    <div className="text absolute w-max" style={textData.styles}>
      <div className="text-content w-full h-full outline-none">{textData.content}</div>
    </div>
  )
}

export default Text