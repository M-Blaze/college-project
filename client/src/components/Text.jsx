import React from 'react'

import useDraggable from '../hooks/useDraggable'
import Resizer from './Resizer'

const Text = React.forwardRef(({ content, styles }, ref) => {
  const [dragStartHandler, dragHandler] = useDraggable()

  return (
    <div ref={ref} draggable className="text absolute w-max" onDragStart={dragStartHandler} onDrag={dragHandler} style={styles}>
      <Resizer>
        <div className="text-content w-full h-full outline-none">{content}</div>
      </Resizer>
    </div>
  )
})

export default Text