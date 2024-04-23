import React from 'react'

import useDraggable from '../hooks/useDraggable'
import Resizer from './Resizer'

const Text = ({ content, styles }) => {
  const [dragStartHandler, dragHandler] = useDraggable()

  return (
    <div draggable className="text absolute w-max" onDragStart={dragStartHandler} onDrag={dragHandler} style={styles}>
      <Resizer>
        <div className="text-content w-full h-full outline-none">{content}</div>
      </Resizer>
    </div>
  )
}

export default Text