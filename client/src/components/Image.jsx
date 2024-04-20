import React from 'react'
import useDraggable from '../hooks/useDraggable'

const Image = ({ src, styles }) => {
  const [dragStartHandler, dragHandler, dragEndHandler] = useDraggable()

  const dragger = () => {
    console.log(dragger)
  }

  return (
    <img className="img-holder absolute w-max" src={src} alt={src} onDragStart={dragStartHandler} onDrag={dragHandler} onDragEnd={dragEndHandler} style={styles} />
  )
}

export default Image