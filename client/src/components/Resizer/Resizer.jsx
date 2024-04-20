import React, { useState } from 'react'

const Resizer = ({ children }) => {
  const [isResizable, setIsResizable] = useState(false)

  return (
    <div className="resize-controls border-2 border-purple-500 relative">
      <span className="control-circle_top-left border border-gray-400 inline-block w-3 h-3 absolute rounded-full bg-white -top-1.5 -left-1.5 hover:bg-purple-500 cursor-nw-resize"></span>
      <span className="control-circle_top-right border border-gray-400 inline-block w-3 h-3 absolute rounded-full bg-white -top-1.5 -right-1.5 hover:bg-purple-500 cursor-ne-resize"></span>
      <span className="control-circle_bottom-left border border-gray-400 inline-block w-3 h-3 absolute rounded-full bg-white -bottom-1.5 -left-1.5 hover:bg-purple-500 cursor-ne-resize"></span>
      <span className="control-circle_bottom-right border border-gray-400 inline-block w-3 h-3 absolute rounded-full bg-white -bottom-1.5 -right-1.5 hover:bg-purple-500 cursor-nw-resize"></span>
      <span className="control-top border border-gray-400 inline-block w-5 h-3 absolute rounded-full bg-white -top-1.5 left-1/2 -translate-x-1/2 hover:bg-purple-500 cursor-nw-resize"></span>
      <span className="control-bottom border border-gray-400 inline-block w-5 h-3 absolute rounded-full bg-white -bottom-1.5 left-1/2 -translate-x-1/2 hover:bg-purple-500 cursor-n-resize"></span>
      <span className="control-left border border-gray-400 inline-block w-3 h-5 absolute rounded-full bg-white -left-1.5 top-1/2 -translate-y-1/2 hover:bg-purple-500 cursor-e-resize"></span>
      <span className="control-right border border-gray-400 inline-block w-3 h-5 absolute rounded-full bg-white -right-1.5 top-1/2 -translate-y-1/2 hover:bg-purple-500 cursor-e-resize"></span>
      { children }
    </div>
  )
}

export default Resizer