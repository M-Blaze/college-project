import React from 'react'
import useDraggable from '../hooks/useDraggable'

const Text = ({ content, styles }) => {
  const [dragStartHandler, dragHandler] = useDraggable()

  return (
    <div draggable className="text absolute w-max select-none" onDragStart={dragStartHandler} onDrag={dragHandler} style={styles}>{content}</div>
  )
}

export default Text