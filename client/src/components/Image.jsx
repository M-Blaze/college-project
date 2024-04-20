import React from 'react'

import useDraggable from '../hooks/useDraggable'
import Resizer from './Resizer'

const Image = ({ src, styles }) => {
  const [dragStartHandler, dragHandler] = useDraggable()
  
  return (
    <div draggable className="img-holder absolute w-max" onDragStart={dragStartHandler} onDrag={dragHandler} style={styles} >
      <Resizer>
        <img draggable={false} src={src} alt={src} />
      </Resizer>
    </div>
  )
}

export default Image